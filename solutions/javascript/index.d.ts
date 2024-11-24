declare const _: import('lodash').LoDashStatic

interface PriorityQueueOptions<T> {
  priority?: (element: T) => number;
  compare?: (a: T, b: T) => number;
}

declare class PriorityQueue<T> {
  constructor(options?: PriorityQueueOptions<T>);
  size(): number;
  isEmpty(): boolean;
  front(): T;
  back(): T;
  enqueue(element: T, priority?: number): PriorityQueue<T>;
  dequeue(): T;
  toArray(): T[];
  clear(): void;
}

declare class MaxPriorityQueue<T> extends PriorityQueue<T> {
  static from<T>(
    entries: Readonly<Iterable<readonly [element: T, priority: number]>>
  ): MaxPriorityQueue<T>;
}

declare class MinPriorityQueue<T> extends PriorityQueue<T> {
  static from<T>(
    entries: Readonly<Iterable<readonly [element: T, priority: number]>>
  ): MinPriorityQueue<T>;
}
