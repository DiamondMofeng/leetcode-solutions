#lang racket

(define/contract (have-conflict event1 event2)
  (-> (listof string?) (listof string?) boolean?)
  (not (or (string>? (list-ref event1 0) (list-ref event2 1) )
           (string<? (list-ref event1 1) (list-ref event2 0) ) ))
  )