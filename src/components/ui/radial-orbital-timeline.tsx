'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Link } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: 'completed' | 'in-progress' | 'pending';
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const nextState: Record<number, boolean> = {};
      const isOpening = !prev[id];

      if (isOpening) {
        nextState[id] = true;
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const nextPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          nextPulseEffect[relId] = true;
        });
        setPulseEffect(nextPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return nextState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval> | undefined;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.46,
      Math.min(1, 0.46 + 0.54 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, zIndex, opacity };
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem['status']): string => {
    switch (status) {
      case 'completed':
        return 'border-white bg-white text-black';
      case 'in-progress':
        return 'border-indigo-300 bg-indigo-300 text-slate-950';
      case 'pending':
      default:
        return 'border-[var(--border-soft)] bg-[var(--surface-soft)] text-[var(--heading)]';
    }
  };

  return (
    <>
      <div className="space-y-4 md:hidden">
        {timelineData.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className="theme-panel text-[var(--heading)] backdrop-blur-lg"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <CardTitle className="theme-heading text-base">{item.title}</CardTitle>
                      <p className="theme-muted mt-1 text-xs uppercase tracking-[0.25em]">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <span className="theme-muted text-xs font-mono">{item.date}</span>
                </div>
                <Badge className={`w-fit px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                  {item.status === 'completed'
                    ? 'COMPLETE'
                    : item.status === 'in-progress'
                    ? 'IN PROGRESS'
                    : 'PENDING'}
                </Badge>
              </CardHeader>
              <CardContent className="theme-body pt-0 text-sm">
                <p>{item.content}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div
        className="hidden min-h-[780px] w-full items-center justify-center overflow-hidden md:flex"
        ref={containerRef}
        onClick={handleContainerClick}
      >
        <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
          <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-indigo-400 to-slate-400 shadow-[0_0_45px_rgba(99,123,255,0.3)] animate-pulse">
            <div className="absolute h-20 w-20 rounded-full border border-white/20 animate-ping opacity-70" />
            <div
              className="absolute h-24 w-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: '0.5s' }}
            />
            <div className="h-8 w-8 rounded-full bg-white/85 backdrop-blur-md" />
          </div>

          <div className="absolute h-96 w-96 rounded-full border border-white/10" />

          <div
            className="absolute flex h-full w-full items-center justify-center"
            ref={orbitRef}
            style={{
              perspective: '1000px',
            }}
          >
            {timelineData.map((item, index) => {
              const position = calculateNodePosition(index, timelineData.length);
              const isExpanded = expandedItems[item.id];
              const isRelated = isRelatedToActive(item.id);
              const isPulsing = pulseEffect[item.id];
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    nodeRefs.current[item.id] = el;
                  }}
                  className="absolute cursor-pointer transition-all duration-700"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    zIndex: isExpanded ? 200 : position.zIndex,
                    opacity: isExpanded ? 1 : position.opacity,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  <div
                    className={`absolute -inset-1 rounded-full ${
                      isPulsing ? 'animate-pulse duration-1000' : ''
                    }`}
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                      width: `${item.energy * 0.5 + 40}px`,
                      height: `${item.energy * 0.5 + 40}px`,
                      left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                      top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    }}
                  />

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isExpanded
                        ? 'scale-150 border-white bg-white text-black shadow-lg shadow-white/30'
                        : isRelated
                        ? 'border-white bg-white/50 text-black animate-pulse'
                        : 'border-[var(--border-soft)] bg-[var(--surface-panel-strong)] text-[var(--heading)]'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div
                    className={`absolute top-14 whitespace-nowrap text-xs font-semibold tracking-[0.2em] transition-all duration-300 ${
                      isExpanded ? 'scale-125 text-[var(--heading)]' : 'text-[var(--muted-text)]'
                    }`}
                  >
                    {item.title}
                  </div>

                  {isExpanded ? (
                    <Card className="theme-panel absolute left-1/2 top-24 w-72 -translate-x-1/2 overflow-visible border backdrop-blur-lg">
                      <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-white/50" />
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between gap-4">
                          <Badge className={`px-2 text-[10px] ${getStatusStyles(item.status)}`}>
                            {item.status === 'completed'
                              ? 'COMPLETE'
                              : item.status === 'in-progress'
                              ? 'IN PROGRESS'
                              : 'PENDING'}
                          </Badge>
                          <span className="theme-muted text-xs font-mono">{item.date}</span>
                        </div>
                        <CardTitle className="theme-heading mt-2 text-sm">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="theme-body text-xs">
                        <p>{item.content}</p>

                        {item.relatedIds.length > 0 ? (
                          <div className="mt-4 border-t border-[var(--border-soft)] pt-3">
                            <div className="mb-2 flex items-center">
                              <Link size={10} className="theme-muted mr-1" />
                              <h4 className="theme-muted text-xs font-medium tracking-wider uppercase">
                                Connected Nodes
                              </h4>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = timelineData.find(
                                  (entry) => entry.id === relatedId
                                );
                                return (
                                  <Button
                                    key={relatedId}
                                    variant="outline"
                                    size="sm"
                                    className="h-6 rounded-none border-[var(--border-soft)] bg-transparent px-2 py-0 text-xs text-[var(--body-text)] transition-all hover:bg-[var(--surface-soft)] hover:text-[var(--heading)]"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleItem(relatedId);
                                    }}
                                  >
                                    {relatedItem?.title}
                                    <ArrowRight size={8} className="theme-muted ml-1" />
                                  </Button>
                                );
                              })}
                            </div>
                          </div>
                        ) : null}
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
