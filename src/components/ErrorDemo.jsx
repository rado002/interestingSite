import { React, useState } from "react";
import { datadogRum } from "@datadog/browser-rum";

const ErrorDemo = () => {
  const [errorPreview, setErrorPreview] = useState(null);

  // useEffect(() => {
  //   console.log("updated");
  // }, [errorPreview]);

  const updateErrorPreview = (message, name) => {
    console.log(`${name}: ${message}`);
    setErrorPreview(`${name}: ${message}`);
  };

  const refError = () => {
    try {
      throw new ReferenceError("Hello");
    } catch (e) {
      updateErrorPreview(e.message, e.name);
    }
  };

  const typeError = () => {
    try {
      throw new TypeError("This is a type error");
    } catch (e) {
      updateErrorPreview(e.message, e.name);
    }
  };

  const customError = () => {
    const error = new Error("Something wrong occurred.");
    try {
      throw new Error(
        `another thing went wrong — something happened on ${window.location.pathname}!`
      );
    } catch (error) {
      datadogRum.addError(
        error,
        {
          pageStatus: "beta"
        },
        "source"
      );
      updateErrorPreview(error);
    }
  };

  const fetchError = () => {
    fetch("https://api.datadoghq.com/api/v1/events")
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
        datadogRum.addError(
          error,
          {
            message: error.message
          },
          "source"
        );
        updateErrorPreview(error);
      });
  };

  return (
    <div className="page">
      <div id="pagetitlesection">
        <h3>Error Demo</h3>
      </div>

      <div id="content">
        <div id="errorContainer">
          <button onClick={refError}>
            Create <code>ReferenceError</code>
          </button>

          <button onClick={typeError}>
            Create <code>TypeError</code>
          </button>

          <button onClick={fetchError}>
            Create <code>FetchError</code>
          </button>

          <button onClick={customError}>
            Create <code>Custom</code>
          </button>
        </div>
        <div id="errorMessageContainer">
          <div id="previewSection">
            {!!errorPreview ? `${errorPreview}` : "Select error to preview"}
          </div>

          <div id="buttonSection">
            {!!errorPreview && (
              <button onClick={() => setErrorPreview(null)}>Clear</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDemo;
