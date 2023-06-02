var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { LitElement, html, css, property, customElement } from 'lit-element';
let DownloadManager = (() => {
    let _classDecorators = [customElement('download-manager')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _files_decorators;
    let _files_initializers = [];
    var DownloadManager = _classThis = class extends LitElement {
        constructor() {
            super(...arguments);
            this.files = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _files_initializers, []));
        }
        render() {
            return html `
      <ul class="file-list">
        ${this.files.map(file => html `
          <li class="file-list-item">
            <div class="file-name">${file.name}</div>
            <button class="file-download-button" @click=${() => this.downloadFile(file.url)}>
              Download
            </button>
          </li>
        `)}
      </ul>
    `;
        }
        downloadFile(url) {
            // Perform download logic here
            console.log('Downloading file:', url);
        }
    };
    __setFunctionName(_classThis, "DownloadManager");
    (() => {
        _files_decorators = [property({ type: Array })];
        __esDecorate(null, null, _files_decorators, { kind: "field", name: "files", static: false, private: false, access: { has: obj => "files" in obj, get: obj => obj.files, set: (obj, value) => { obj.files = value; } } }, _files_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        DownloadManager = _classThis = _classDescriptor.value;
    })();
    _classThis.styles = css `
    .file-list {
      list-style-type: none;
      padding: 0;
    }

    .file-list-item {
      display: flex;
      align-items: center;
      padding: 8px;
      border-bottom: 1px solid #ccc;
    }

    .file-name {
      flex: 1;
    }

    .file-download-button {
      margin-left: 8px;
    }
  `;
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DownloadManager = _classThis;
})();
