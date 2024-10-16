let scoreTeam1 = document.getElementById('scoreTeam1')
let scoreTeam2 = document.getElementById('scoreTeam2')

score1 = 0
score2 = 0

function addScore(points, team) {
    if (team == 1) {
        score1 += points
        scoreTeam1.textContent = score1
    } else {
        score2 += points
        scoreTeam2.textContent = score2
    }
}