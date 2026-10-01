const input =
      document.getElementById("newsInput");

    const counter =
      document.getElementById("counter");

    const result =
      document.getElementById("result");

    const score =
      document.getElementById("score");

    const progressBar =
      document.getElementById("progressBar");

    const scanButton =
      document.getElementById("scanButton");


    /* CHARACTER COUNTER */

    input.addEventListener(
      "input",
      function () {

        counter.textContent =
          input.value.length + " chars";

      }
    );


    /* TABS */

    document
      .querySelectorAll(".tab")
      .forEach(function (tab) {

        tab.addEventListener(
          "click",
          function () {

            document
              .querySelectorAll(".tab")
              .forEach(function (item) {

                item.classList.remove("active");

              });


            tab.classList.add("active");


            const mode =
              tab.dataset.mode;


            const placeholders = {

              text:
                "Paste a news article, headline, or any text you want to verify...",

              image:
                "Image analysis interface ready...",

              video:
                "Video analysis interface ready...",

              url:
                "Paste a news article URL to verify..."

            };


            input.placeholder =
              placeholders[mode];


            if (mode === "text") {

              scanButton.textContent =
                "⌁ Analyze Text";

            } else {

              scanButton.textContent =
                "⌁ Analyze " +
                mode.charAt(0).toUpperCase() +
                mode.slice(1);

            }

          }
        );

      });


    /* CLEAR BUTTON */

    document
      .getElementById("clearButton")
      .addEventListener(
        "click",
        function () {

          input.value = "";

          counter.textContent =
            "0 chars";

          result.classList.remove("show");

          progressBar.style.width =
            "0%";

        }
      );


    /* ANALYZE BUTTON */

    scanButton.addEventListener(
      "click",
      function () {

        if (!input.value.trim()) {

          input.focus();

          input.placeholder =
            "Enter content first — then start the forensic scan...";

          return;

        }


        scanButton.disabled = true;

        scanButton.textContent =
          "⌁ Scanning...";


        result.classList.remove("show");


        setTimeout(
          async function () {

            /*
              DEMO SCORE ONLY.

              Replace this with your
              actual fake-news detection
              API/backend response.
            */

            const result = await response.json();


            score.textContent =
              demoScore + "%";


            result.classList.add("show");


            setTimeout(
              function () {

                progressBar.style.width =
                  demoScore + "%";

              },
            100
            );


            scanButton.disabled =
              false;

            scanButton.textContent =
              "⌁ Analyze Text";

          },
          900
        );

      }
    );

/* ANALYZE BUTTON */

scanButton.addEventListener(
  "click",
  function () {

    if (!input.value.trim()) {

      input.focus();

      input.placeholder =
        "Enter content first — then start the forensic scan...";

      return;

    }

    scanButton.disabled = true;

    scanButton.textContent =
      "⌁ Scanning...";

    result.classList.remove("show");

    setTimeout(
      function () {

        /*
          DEMO SCORE ONLY.

          Replace this with your
          actual fake-news detection
          API/backend response.
        */

        const demoScore = 72;

        score.textContent =
          demoScore + "%";

        result.classList.add("show");

        setTimeout(
          function () {

            progressBar.style.width =
              demoScore + "%";

          },
          100
        );

        scanButton.disabled =
          false;

        scanButton.textContent =
          "⌁ Analyze Text";

      },
      900
    );

  }
);