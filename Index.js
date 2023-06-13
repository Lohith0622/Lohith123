<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Google Images</title>
    <link rel="shortcut icon" href="images/fav.png" type="image/x-icon" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="my-4 container-fluid">
      <nav id="navid" class="navbar navbar-expand bg-body-tertiary">
        <div class="container-fluid">
          <ul id="uid" class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active text-primary" aria-current="page" href="index.html"
                >Back to Google</a
              >
            </li>
            
          </ul>
        </div>
      </nav>
    </div>

    <div style="text-align: center; padding-top: 20vh">
      <img
        src="images/googleimage.png"
        alt=""
        height="92"
        style="margin: 0 auto"
      />
    </div>

    <br />

    <form id="search-form" action="https://www.google.com/search" method="GET">
      <div class="search-bar" title="Search Images">
        <img src="images/mag.png" alt="" height="22px" class="search-icon" />
        <input type="text" class="search-input" id="search-input" name="q" />
        <img
          src="images/speaker.png"
          alt=""
          height="33px"
          class="speaker-icon"
          title="Search by voice, it works pretty fine"
        />
        <img
          src="images/lens.png"
          alt=""
          height="24px"
          class="lens-icon"
          title="Search by image"
        />
        <img
          src="images/blueglass.png"
          alt=""
          height="21px"
          class="bluelensglass"
        />
      </div>
      <input type="hidden" name="tbm" value="isch" />
    </form>

      <div class="position-fixed bottom-0 start-0">
        <nav id="navid" class="navbar navbar-expand bg-body-tertiary">
          <div class="container-fluid">
            <ul id="uid" class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  style="font-size: 18px; color: rgb(83, 82, 82)"
                  class="nav-link active"
                  aria-current="page"
                  href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  style="font-size: 18px; color: rgb(83, 82, 82)"
                  class="nav-link active"
                  aria-current="page"
                  href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
                  >Advertising</a
                >
              </li>
              <li class="nav-item">
                <a
                  style="font-size: 18px; color: rgb(83, 82, 82)"
                  class="nav-link active"
                  aria-current="page"
                  href="https://www.google.com/intl/en_in/business/"
                  >Business</a
                >
              </li>
              <li class="nav-item">
                <a
                  style="font-size: 18px; color: rgb(83, 82, 82)"
                  class="nav-link active"
                  aria-current="page"
                  href="https://www.google.com/search/howsearchworks/?fg=1"
                  >How Search works</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>

    <script src="index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
