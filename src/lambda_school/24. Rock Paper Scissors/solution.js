/**
 * Title  : Rock Paper Scissors
 * Author : Frank Faustino
 * Date   : 2018-09-26
 * Lang   : JavaScript

 * The solution uses recursion to find all the possible combination
 * of plays. There are three separate recursive calls for each play —
 * "rock", "paper", "scissors" — and additional recursive calls for each
 * for the number of rounds played.
 * The recursive calls have to fully evaluate (hit the base case, # of rounds)
 * for each play ("rock") before moving on to the next play ("paper").

 * Example:
 *   rounds = 2
 *   rock     rock
 *   rock     paper
 *   rock     scissors
 *   paper    rock
 *   ...
 */

const rockPaperScissors = rounds => {
  const plays = ['rock', 'paper', 'scissors']
  const result = []
  const getResult = played => {
    if (played.length === rounds) result.push(played)
    else
      plays.forEach(play => getResult([...played, play]))
  }

  getResult([])

  return result
}

// Each additional round increases the number of possibilities exponentially
rockPaperScissors(1)
// rock
// paper
// scissors

rockPaperScissors(2)
// rock     rock
// rock     paper
// rock     scissors
// paper    rock
// paper    paper
// paper    scissors
// scissors rock
// scissors paper
// scissors scissors

rockPaperScissors(3)
// rock     rock      rock
// rock     rock      paper
// rock     rock      scissors
// rock     paper     rock
// rock     paper     paper
// rock     paper     scissors
// rock     scissors  rock
// rock     scissors  paper
// rock     scissors  scissors
// paper    rock      rock
// paper    rock      paper
// paper    rock      scissors
// paper    paper     rock
// paper    paper     paper
// paper    paper     scissors
// paper    scissors  rock
// paper    scissors  paper
// paper    scissors  scissors
// scissors rock      rock
// scissors rock      paper
// scissors rock      scissors
// scissors paper     rock
// scissors paper     paper
// scissors paper     scissors
// scissors scissors  rock
// scissors scissors  paper
// scissors scissors  scissors

rockPaperScissors(4) // 81 possibilities
rockPaperScissors(5) // 243 possibilities
