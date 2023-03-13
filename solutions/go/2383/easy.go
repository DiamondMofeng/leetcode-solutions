package leetcode

func minNumberOfHours(energy int, experience int, enemyEnergies []int, enemyExperiences []int) int {
	// 正向遍历，打不过再练
	trains := 0

	n := len(enemyEnergies)
	for i := 0; i < n; i++ {
		if energy <= enemyEnergies[i] {
			trains += enemyEnergies[i] + 1 - energy
			energy = enemyEnergies[i] + 1
		}
		if experience <= enemyExperiences[i] {
			trains += enemyExperiences[i] + 1 - experience
			experience = enemyExperiences[i] + 1
		}

		energy -= enemyEnergies[i]
		experience += enemyExperiences[i]
	}

	return trains
}
