#lang racket

(define/contract (average-value nums)
  (-> (listof exact-integer?) exact-integer?)
  (define recur
    (lambda (lst cb)
      (cond
        [(null? lst)
         (cb 0 0)]
        [(eq? (remainder (car lst) 6) 0)
         (recur (cdr lst) (lambda (sum num)(cb (+ sum (car lst)) (+ num 1))) )]
        [else
         (recur (cdr lst) (lambda (sum num)(cb sum num)) )]
        )))
  (recur nums (lambda (sum num)
                (cond [(eq? num 0) 0]
                      [else (floor (/ sum num))]
                      )))
  )