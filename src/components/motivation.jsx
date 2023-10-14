<>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .bold {\n    text-align: justify;\n    font-family: Helvetica; /* Fixed font family name */\n    font-size: 80px;\n    background-color: yellow;\n  }\n\n  .body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: red;\n    margin: 0;\n  }\n\n  .centre {\n    max-width: 1000px;\n    text-align: center;\n  }\n\n  button {\n    font-size: 18px;\n    padding: 10px 20px;\n    margin-top: 20px;\n    cursor: pointer;\n    background-color: green;\n    border: none;\n    color: white;\n  }\n"
    }}
  />
  <div className="centre">
    <b className="bold" id="quote">
      If you'll never bleed,
      <br />
      you'll never grow.
    </b>
    <br />
    <button onclick="changeQuote()">Change Quote</button>
  </div>
</>
