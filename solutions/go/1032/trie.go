package leetcode

type StreamChecker struct {
	trie  *Trie
	chars []byte
}

func Constructor(words []string) StreamChecker {
	trie := &Trie{false, make(map[byte]*Trie)}

	for _, word := range words {
		trie.Insert(word)
	}

	return StreamChecker{trie: trie, chars: make([]byte, 0)}
}

func (this *StreamChecker) Query(letter byte) bool {
	this.chars = append(this.chars, letter)
	return this.trie.Check(this.chars)
}

type Trie struct {
	isEnd bool
	nodes map[byte]*Trie
}

// 将字符串倒序插入字典树
func (this *Trie) Insert(word string) {
	n := len(word)

	p := this
	for i := n - 1; i >= 0; i-- {
		ch := word[i]

		if p.nodes[ch] == nil {
			p.nodes[ch] = new(Trie)
			p.nodes[ch].nodes = map[byte]*Trie{}
		}
		if p.nodes[ch].isEnd {
			return
		}
		p = p.nodes[ch]
	}
	p.isEnd = true
}

func (this *Trie) Check(chars []byte) bool {
	LONGEST := 200
	n := len(chars)

	p := this
	for i := n - 1; i >= 0 && LONGEST > 0; i-- {
		LONGEST -= 1
		ch := chars[i]

		p = p.nodes[ch]
		if p == nil {
			return false
		}

		if p.isEnd {
			return true
		}
	}

	return false
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * obj := Constructor(words);
 * param_1 := obj.Query(letter);
 */
