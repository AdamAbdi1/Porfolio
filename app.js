const welcome = () => {
    const $welcomh1 = $('<h1>').text('Welcome').css('text-align', 'center')
    $welcomh1.appendTo('body')
    const $welp = $('<p>').text('My name is Adam Abdi and this is my portfolio').css('text-align', 'center')
    $welp.appendTo('body')
}

const aboutMe = () => {
    const $link = $('<a>').attr('href', 'aboutMe.html').text('About Me').addClass('about')
    const $abouth1 = $('<h1>').text('About Me')
    $abouth1.appendTo('body') 
    const $aboutp = $('<p>').text('I am Adam Abdi, and I am looking for a job in the Software Engineering field, I have been intrested in coding since I was young.  I am currently enrolled in a coding bootcamp to evolve my skills as a programmer.  I am a team player, dedicated and open-minded.  After I gradute from this bootcamp I will have the necessary tool to excel inside of a work place.')
    $aboutp.appendTo('body')
    $link.appendTo('body')
}

 
const resume = () => {
    const $link2 = $('<a>').attr('href', 'resume.html').text('Resume').addClass('res')
    const $resumeh1 = $('<h1>').text('ADAM ABDI').css('text-decoration', 'underline')
    $link2.appendTo('body')
    $resumeh1.appendTo('body')
    const $resumep = $('<p>').text('12234 Parkview Lane, Burnsville, MN 55337 - newacc928@gmail.com - (763) 777 1403')
    $resumep.appendTo('body')
    const $resumeh3 = $('<h5>').text('SUMMARY')
    const $resumeh32 = $('<h5>').text('PROFESSIONAL EXPERIENCE')
    const $resumeh33 = $('<h5>').text('EDUCATION')
    const $resumep5 = $('<p>').text('1+ year of Customer Service Experience')
    const $resumep2 = $('<p>').text('Burnsville Highschool, Burnsville, MN')
    const $resumep3 = $('<p>').text('Best Buy, Burnsville, MN September 2019-November 2020')
    const $resumep4 = $('<p>').text('Asset Protection Associate')
    $resumeh3.appendTo('body')
    $resumep5.appendTo('body')
    $resumeh32.appendTo('body')
    $resumep3.appendTo('body')
    $resumep4.appendTo('body')
    $resumeh33.appendTo('body')
    $resumep2.appendTo('body')
    
}

const resume1 = () => {
    const $resumeh1 = $('<h1>').text('ADAM ABDI').css('text-decoration', 'underline').css('display', 'block').addClass('hov').addClass('color')
    $resumeh1.appendTo('#resume')
    const $resumep = $('<p>').text('12234 Parkview Lane, Burnsville, MN 55337 - newacc928@gmail.com - (763) 777 1403').css('display', 'none').addClass('hide')
    $resumep.appendTo('#resume')
    $('.hov').hover(function(){
        $('.hide').css('display', 'block') 
    }, function(){
        $('.hide').css('display', 'none')
    })
    const $resumeh3 = $('<h5>').text('SUMMARY').css('display', 'block').addClass('hov2').addClass('color')
    const $resumeh32 = $('<h5>').text('PROFESSIONAL EXPERIENCE').css('display', 'block').addClass('hov3').addClass('color')
    const $resumeh33 = $('<h5>').text('EDUCATION').css('display', 'block').addClass('hov4').addClass('color')
    const $resumep5 = $('<p>').text('1+ year of Customer Service Experience').css('display', 'none').addClass('hide2')
    const $resumep2 = $('<p>').text('Burnsville Highschool, Burnsville, MN').css('display', 'none').addClass('hide4')
    const $resumep3 = $('<p>').text('Best Buy, Burnsville, MN September 2019-November 2020').css('display', 'none').addClass('hide3')
    const $resumep4 = $('<p>').text('Asset Protection Associate').css('display', 'none').addClass('hide3')
    $resumeh3.appendTo('#resume')
    $resumep5.appendTo('#resume')
    $resumeh32.appendTo('#resume')
    $resumep3.appendTo('#resume')
    $resumep4.appendTo('#resume')
    $resumeh33.appendTo('#resume')
    $resumep2.appendTo('#resume')
    $('.hov2').hover(function(){
        $('.hide2').css('display', 'block') 
    }, function(){
        $('.hide2').css('display', 'none')
    })
    $('.hov3').hover(function(){
        $('.hide3').css('display', 'block') 
    }, function(){
        $('.hide3').css('display', 'none')
    })
    $('.hov4').hover(function(){
        $('.hide4').css('display', 'block') 
    }, function(){
        $('.hide4').css('display', 'none')
    })

}

const aboutMe1 = () => {
    const $abouth1 = $('<h1>').text('About Me').addClass('color')
    $abouth1.appendTo('#about') 
    const $aboutp = $('<p>').text('I am Adam Abdi, and I am looking for a job in the Software Engineering field, I have been intrested in coding since I was young.  I am currently enrolled in a coding bootcamp to evolve my skills as a programmer.  I am a team player, dedicated and open-minded.  After I gradute from this bootcamp I will have the necessary tool to excel inside of a work place.')
    $aboutp.appendTo('#about')
}

const welcome1 = () => {
    const $div = $('<div>').css({'position': 'relative', 'height': '300px', 'width': '700px'})
    $div.appendTo('#wel')
    const $welh1 = $('<h1>').text('Welcome').css({'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'margin': '0'}).addClass('color')
    $welh1.appendTo($div)
    const $welp2 = $('<p>').text('My name is Adam Abdi and this is my portfolio').css({'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'margin': '30px', 'width': '400px'})
    $welp2.appendTo($div)
}

const changeColor = () => {
    color = ['red', 'blue', 'green', 'Aquamarine', 'BlueViolet', 'BurlyWood', 'DarkCyan', 'DarkGoldenRod', 'Pink']
    $('.color').css('color', color[Math.floor(Math.random() * color.length)])
    console.log(color.length);
}

const links = () => {
    const $divlink = $('<div>').css('text-align', 'center')
    $divlink.appendTo('body')
    const $link = $('<a>').attr('href', 'aboutMe.html').text('About Me').addClass('about')
    const $link2 = $('<a>').attr('href', 'resume.html').text('Resume').addClass('res')
    // const $link3
    $link.appendTo($divlink)
    $link2.appendTo($divlink)
}

$(() =>{

    $('#1').on('click', welcome)
    $('#2').on('click', aboutMe)
    $('#3').on('click', resume)
    $('.about').on('click', aboutMe)
    $('res').on('click', resume)
    resume1()
    aboutMe1()
    welcome1()
    $('#4').on('click', changeColor)
    links()
})