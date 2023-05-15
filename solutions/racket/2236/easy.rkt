#lang racket

; Definition for a binary tree node.


; val : integer?
; left : (or/c tree-node? #f)
; right : (or/c tree-node? #f)
(struct tree-node
  (val left right) #:mutable #:transparent)

; constructor
(define (make-tree-node [val 0])
  (tree-node val #f #f))

; 下面是做题空间

(define/contract (check-tree root)
  (-> (or/c tree-node? #f) boolean?)
  (eq? (tree-node-val root) (+ (tree-node-val (tree-node-left root)) (tree-node-val (tree-node-left root))))
  )