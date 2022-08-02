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
    const $proj = $('<h5>').text('PROJECTS').css('display', 'block').addClass('hov5').addClass('color')
    const $pj = $('<p>').text('#Project 1 Example').css('display', 'none').addClass('hide5')
    $resumeh3.appendTo('#resume')
    $resumep5.appendTo('#resume')
    $resumeh32.appendTo('#resume')
    $resumep3.appendTo('#resume')
    $resumep4.appendTo('#resume')
    $resumeh33.appendTo('#resume')
    $resumep2.appendTo('#resume')
    $proj.appendTo('#resume')
    $pj.appendTo('#resume')
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
    $('.hov5').hover(function(){
        $('.hide5').css('display', 'block') 
    }, function(){
        $('.hide5').css('display', 'none')
    })
    
    
}

const aboutMe1 = () => {
    const $abouth1 = $('<h1>').text('About Me').addClass('color')
    $abouth1.appendTo('#about') 
    const $aboutp = $('<p>').text('I am Adam Abdi, and I am looking for a job in the Software Engineering field, I have been intrested in coding since I was young.  I am currently enrolled in a coding bootcamp to evolve my skills as a programmer.  I am a team player, dedicated and open-minded.  After I gradute from this bootcamp I will have the necessary tool to excel inside of a work place.')
    $aboutp.appendTo('#about')
    
    
    const $form = $('<form>').attr('id', 'form')
    $form.appendTo('#about')
    
    const $label = $('<label>').text('What is your favorite fruit? ')
    
    const $input = $('<input>').attr('id', 'val').attr('type', 'text')
    // const $val = $('#val').val()
    $label.appendTo('#about')
    $input.appendTo('#about')
    const $input1 = $('<input>').attr('type', 'submit').attr('value', 'Submit').attr('id', 'sub')
    $input1.appendTo('#about')
    // const $formp = $('<p>').text(`Well my favorite fruit is ${$val}!`).attr('id', 'ee')
    // $formp.insertAfter('#sub')
    
}

const myFav = () => {
    const $val = $('#val').val()
    const $formp = $('<p>').text(`Well my favorite fruit is also ${$val}!`)
    $formp.insertAfter('#sub')
}

const welcome1 = () => {
    const $div = $('<div>').css({'position': 'relative', 'height': '400px', 'width': '1264px'})
    $div.appendTo('#wel')
    const $welh1 = $('<h1>').text('Welcome').css({'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'margin': '0'}).addClass('color')
    $welh1.appendTo($div)
    const $welp2 = $('<p>').text('My name is Adam Abdi and this is my portfolio').css({'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'margin': '30px', 'width': '400px'})
    $welp2.appendTo($div)
    $('body').css({'max-width': '100%', 'max-height': '100%'})
}

const changeColor = () => {
    color = ['red', 'blue', 'green', 'Aquamarine', 'BlueViolet', 'BurlyWood', 'DarkCyan', 'DarkGoldenRod', 'Pink']
    $('.color').css('color', color[Math.floor(Math.random() * color.length)])
}

const links = () => {
    const $divlink = $('<div>').css({'text-align': 'center'})
    $divlink.appendTo('body')
    const $link = $('<a>').attr('href', 'aboutMe.html').text('About Me').addClass('about')
    const $link2 = $('<a>').attr('href', 'resume.html').text('Resume').addClass('res')
    const $link3 = $('<a>').attr('href', 'index.html').text('Home').addClass('wel')
    const $link4 = $('<a>').attr('href', 'https://github.com/AdamAbdi1').text('GitHub')
    const $link5 = $('<a>').attr('href', 'https://www.linkedin.com/in/adam-abdi-3675271b7/').text('Linkedin')
    $link3.appendTo($divlink)
    $link.appendTo($divlink)
    $link2.appendTo($divlink)
    $link4.appendTo($divlink)
    $link5.appendTo($divlink)
}

$(() =>{
    resume1()
    aboutMe1()
    welcome1()
    $('#4').on('click', changeColor)
    links()
    $('#sub').on('click', myFav)
    const $meta = $('<meta>').attr('name','viewport').attr('content', 'width=device-width').attr('initial-scale', '1')
    $meta.appendTo('head')
})