const linkInsert = `
  <li>
    <a href="https://www.linkedin.com/in/tobiasgrethermurray/" target="_blank"><i class="fa fa-linkedin"></i></a>
  </li>
  <li>
    <a href="https://medium.com/@tobias_gm" target="_blank"><i class="fa fa-medium"></i></a>
  </li>
  <li>
    <a href="https://twitter.com/grethermurrayt" target="_blank"><i class="fa fa-twitter"></i></a>
  </li>
  <li>
    <a href="https://www.youtube.com/channel/UC1TMSm8CAmFTZH2EeU87Lfg" target="_blank"><i class="fa fa-youtube-play"></i></a>
  </li>
`;

const links = document.querySelectorAll("ul.social-links");
for (l of links) {
  l.innerHTML = linkInsert;
}
