export const linkToYoutubeChannel = () => {
    const yewonImg = document.getElementById("yewon-img")
    const coramImg = document.getElementById("coram-img")
    const trainingImg = document.getElementById("training-img")

    yewonImg.addEventListener('click', () => {
        window.open('https://www.youtube.com/@iyewonch')
    })

    coramImg.addEventListener('click', () => {
        window.open('https://www.youtube.com/@CoramDeo237')
    })

    trainingImg.addEventListener('click', () => {
        window.open('https://www.youtube.com/@CoramDeoTraining')
    })
}