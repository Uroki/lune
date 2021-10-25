// ===========================================
//   Project: Lune UI
//   Dev: Uroki RT
//   Date: 2021.10.23
//   Version: 1.0.0
//   Github: https://github.com/uroki/lune
// ===========================================

const _selector = (q) => document.querySelector(q);
const _selectorAll = (q) => document.querySelectorAll(q);
/**
 *
 * @param  {...string} t Tag Name
 * @returns {NodeList}
 */
const _createElements = (...t) => t.map((e) => document.createElement(e));
const _getLuneData = (el) => {
  let vl = el.attributes.lune.value;
  let ob = {};
  vl.match(/([^\s]+):([^\s]+)/g).map((e) => {
    let a = e.split(":");
    ob[a[0]] = a[1];
  });
  return ob;
};

/* Squit Handler */ (() => {
  let s_els = _selectorAll('[lune*="squit:"]');
  s_els.forEach((el) => {
    let [div] = _createElements("div");
    let { squit } = _getLuneData(el);
    for (let i = 0; i < squit; i++) {
      let [span] = _createElements("span");
      if (i >= 4) {
        let top = Math.floor(Math.random() * 100) + 1 + "%";
        let left = Math.floor(Math.random() * 100) + 1 + "%";
        span.style.top = top;
        span.style.left = left;
      }
      div.append(span);
    }
    div.setAttribute("lune", "squit");
    el.append(div);
  });
})();

/* Padding Handler */ (() => {
  let s_els = _selectorAll('[lune*="padding:"]');
  s_els.forEach((el) => {
    let { padding } = _getLuneData(el);
    el.style.padding = padding + "px";
  });
})();

/* Margin Handler */ (() => {
  let s_els = _selectorAll('[lune*="margin:"]');
  s_els.forEach((el) => {
    let { margin } = _getLuneData(el);
    el.style.margin = margin + "px";
  });
})();

/* Size Handler */ (() => {
  let s_els = _selectorAll('[lune*="size:"]');
  s_els.forEach((el) => {
    let { size } = _getLuneData(el);
    el.style.width = size + "px";
    el.style.height = size + "px";
  });
})();
/* Width Handler */ (() => {
  let s_els = _selectorAll('[lune*="width:"]');
  s_els.forEach((el) => {
    let { width } = _getLuneData(el);
    el.style.width = width + "px";
  });
})();
/* Height Handler */ (() => {
  let s_els = _selectorAll('[lune*="height:"]');
  s_els.forEach((el) => {
    let { height } = _getLuneData(el);
    el.style.height = height + "px";
  });
})();
/* Max Width Handler */ (() => {
  let s_els = _selectorAll('[lune*="maxwidth:"]');
  s_els.forEach((el) => {
    let { maxwidth } = _getLuneData(el);
    el.style.maxWidth = maxwidth + "px";
  });
})();
/* Max Height Handler */ (() => {
  let s_els = _selectorAll('[lune*="maxheight:"]');
  s_els.forEach((el) => {
    let { maxheight } = _getLuneData(el);
    el.style.maxHeight = maxheight + "px";
  });
})();
/* Min Width Handler */ (() => {
  let s_els = _selectorAll('[lune*="minwidth:"]');
  s_els.forEach((el) => {
    let { minwidth } = _getLuneData(el);
    el.style.minWidth = minwidth + "px";
  });
})();
/* Min Height Handler */ (() => {
  let s_els = _selectorAll('[lune*="minheight:"]');
  s_els.forEach((el) => {
    let { minheight } = _getLuneData(el);
    el.style.minHeight = minheight + "px";
  });
})();

/* Text Size Handler */ (() => {
  let s_els = _selectorAll('[lune*="font:"]');
  s_els.forEach((el) => {
    let { font } = _getLuneData(el);
    el.style.fontSize = font + "px";
  });
})();

/* Text Align Handler */ (() => {
  let s_els = _selectorAll('[lune*="align:"]');
  s_els.forEach((el) => {
    let { align } = _getLuneData(el);
    el.style.textAlign = align;
  });
})();

/* Text Color Handler */ (() => {
  let s_els = _selectorAll('[lune*="color:"]');
  s_els.forEach((el) => {
    let { color } = _getLuneData(el);
    el.style.color = "#" + color;
  });
})();

/* Text Space Handler */ (() => {
  let s_els = _selectorAll('[lune*="space:"]');
  s_els.forEach((el) => {
    let { space } = _getLuneData(el);
    el.style.letterSpacing = space + "px";
  });
})();

/* Line Height Handler */ (() => {
  let s_els = _selectorAll('[lune*="line:"]');
  s_els.forEach((el) => {
    let { line } = _getLuneData(el);
    el.style.lineHeight = line + "px";
  });
})();

/* Back Color Handler */ (() => {
  let s_els = _selectorAll('[lune*="back:"]');
  s_els.forEach((el) => {
    let { back } = _getLuneData(el);
    if (!["error", "success", "warn", "info"].includes(back)) el.style.backgroundColor = "#" + back;
  });
})();

/* Border Radius Handler */ (() => {
  let s_els = _selectorAll('[lune*="radius:"]');
  s_els.forEach((el) => {
    let { radius } = _getLuneData(el);
    el.style.borderRadius = radius + "px";
  });
})();

/* Copy Handler */ (() => {
  let s_els = _selectorAll('[lune*="copy:"]');
  s_els.forEach((el) => {
    let { copy } = _getLuneData(el);
    let [button] = _createElements("button");
    el.style.position = "relative";
    button.setAttribute("lune", "button");
    button.textContent = "COPY";
    button.addEventListener(
      "click",
      () => {
        navigator.clipboard
          .writeText(el.children[+copy].textContent)
          .then(() => {
            Lune.Message("Copy Success", "success");
          })
          .catch(() => {
            Lune.Message("Copy Failed", "error");
          });
      },
      !1
    );
    button.style.cssText = `position: fixed;top: 8px;right: 8px;margin: 0;font-size: 9px;padding: 4px 8px;line-height: 16px;`;
    el.appendChild(button);
  });
})();

/* Hash Handler */ (() => {
  /* Remove Current Hash */ location.hash = "";
  function HandleHash() {
    if (!/#.+/.test(location.hash)) return !1;
    let h_els = _selectorAll(`[href="${location.hash}"]`);
    let a_els = _selectorAll("a");
    a_els.length && a_els.forEach((e) => e.classList.remove("active"));
    h_els.length && h_els.forEach((e) => e.classList.add("active"));
    return !0;
  }
  window.addEventListener("hashchange", HandleHash, !1);
})();

/**
 * Lune UI Handler
 */
const Lune = (() => {
  function Alert({
    title = "Alert",
    body = "Lune Alert",
    type = "",
    buttons = [{ title: "Ok", handle: (self) => self.close() }],
  }) {
    let [AlertParent, Buttons] = _createElements("div", "div");
    let Self = {
      close() {
        AlertParent.classList.add("hide");
        setTimeout(() => {
          AlertParent.remove();
        }, 1000);
      },
      parent: AlertParent,
    };
    AlertParent.setAttribute("lune", "temp:alert" + (type ? " " + type : ""));
    buttons.forEach((btn) => {
      let [Button] = _createElements("button");
      Button.textContent = btn.title;
      Button.setAttribute("lune", "button");
      Button.addEventListener("click", () => btn.handle(Self), !1);
      Buttons.appendChild(Button);
    });
    AlertParent.innerHTML = `<div>${title}</div><div>${body}</div>`;
    AlertParent.appendChild(Buttons);
    document.body.appendChild(AlertParent);
  }
  function Message(text = "Message", type, time = 5) {
    let [MessageParent, Close] = _createElements("div", "button");
    function close() {
      MessageParent.classList.add("hide");
      setTimeout(() => {
        MessageParent.remove();
      }, 1000);
    }
    MessageParent.setAttribute("lune", "temp:message" + (type ? " " + type : ""));
    MessageParent.innerHTML = `<div>${text}</div>`;
    Close.addEventListener("click", close, !1);
    Close.innerHTML = "✕";
    MessageParent.appendChild(Close);
    document.body.appendChild(MessageParent);
    setTimeout(close, time * 1000);
  }
  /**
   * Lune ELements Selector
   * @param {string} query Lune Query
   * @returns {NodeList}
   */
  function GetElement(query) {
    return _selectorAll(`[lune~="${query}"]`);
  }
  /**
   * Get Lune Data
   * @param {Element|Node} element HTML Element
   * @returns {object}
   */
  function GetData(element) {
    return _getLuneData(element);
  }
  /**
   * Set Lune Data
   * @param {Element|Node} element HTML Element
   * @param {string} data Lune Data
   */
  function SetData(element, data) {
    let _attr = element.getAttribute("lune");
    if (_attr) element.setAttribute("lune", _attr + " " + data);
    else element.setAttribute("lune", data);
  }
  return {
    Alert,
    Message,
    GetElement,
    GetData,
    SetData,
  };
})();
