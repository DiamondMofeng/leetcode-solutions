#lang racket

(define/contract (convert-temperature celsius)
  (-> flonum? (listof flonum?))
  (cons (+ celsius 273.15) (cons (+ 32.00 (* celsius 1.80)) '())))