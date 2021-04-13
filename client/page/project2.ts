import { $ } from '../modules/jQuery.js'

let readTime = `Approximate XXXX minutes read`

function calculateReadingTime(strings, readTime) {
  const wpm = 200
  let readingTime = Math.ceil((strings[0] + strings[1]).split(' ').length / wpm)
  console.log(readingTime)
  let readingMinutes = `${readingTime} minutes read`
  return `${strings[0]}${readingMinutes}${strings[1]}`
}

let form = calculateReadingTime`
<div class=newspaper>

<h2>Breaking news</h2>
<h5>avimehenwal - <small><em>${readTime}</em><small></h5>

<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>

<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>

<p>Proident anim sint ut tempor occaecat et magna magna excepteur eu aliquip aliqua enim. Nisi dolore enim sint deserunt veniam laboris pariatur qui excepteur nisi nostrud ea mollit nulla. Aliqua occaecat incididunt laboris veniam culpa fugiat consectetur. Mollit cupidatat consequat cupidatat et officia veniam. Proident exercitation officia ea magna anim sint minim consectetur nulla.</p>

</div>
`
$('main').html(form)
