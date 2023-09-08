#lang racket

(define/contract (find-delayed-arrival-time arrivalTime delayedTime)
  (-> exact-integer? exact-integer? exact-integer?)
    (modulo (+ arrivalTime delayedTime) 24)
  )