declare const _: import('lodash').LoDashStatic

interface PriorityQueueOptionsPriority<T> {
  priority: (element: T) => number;
}

interface PriorityQueueOptionsCompare<T> {
  compare: (a: T, b: T) => number;
}

type PriorityQueueOptions<T> =
  | PriorityQueueOptionsCompare<T>
  | PriorityQueueOptionsPriority<T>

interface PriorityQueue {
  new <T>(options: PriorityQueueOptionsCompare<T>): PriorityQueueCompareImpl<T>
  new <T>(options: PriorityQueueOptionsPriority<T>): PriorityQueuePriorityImpl<T>
}

interface PriorityQueueCompareImpl<T> {
  new(options: PriorityQueueOptionsCompare<T>);
  size(): number;
  isEmpty(): boolean;
  front(): T;
  back(): T;
  enqueue(element: T): PriorityQueueCompareImpl<T>;
  dequeue(): T;
  toArray(): T[];
  clear(): void;
}

interface PriorityQueueItem<T> {
  element: T
  priority: number
}

interface PriorityQueuePriorityImpl<T> {
  new(options: PriorityQueueOptionsPriority<T>);
  size(): number;
  isEmpty(): boolean;
  front(): PriorityQueueItem<T>;
  back(): PriorityQueueItem<T>;
  enqueue(element: T, priority?: number): PriorityQueuePriorityImpl<T>;
  dequeue(): PriorityQueueItem<T>;
  toArray(): PriorityQueueItem<T>[];
  clear(): void;
}

// declare class MaxPriorityQueue<T> extends PriorityQueue<T> {
//   static from<T>(
//     entries: Readonly<Iterable<readonly [element: T, priority: number]>>
//   ): MaxPriorityQueue<T>;
// }

declare const MaxPriorityQueue: PriorityQueue

declare const MinPriorityQueue: PriorityQueue
