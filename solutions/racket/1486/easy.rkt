#lang racket

(define/contract (xor-operation n start)
  (-> exact-integer? exact-integer? exact-integer?)
  (cond
    [(eq? 1 n) start]
    [else (bitwise-xor start (xor-operation (- n 1) (+ start 2)))]
    )
  )