# Vue.js

## 1. Introduction to Vue.js
### 1.1 Definition

Vue.js is a progressive JavaScript framework used to build interactive user interfaces and modern web applications. It uses a declarative, component-based programming model that allows developers to divide an application into small, reusable components.

Vue.js works with standard HTML, CSS, and JavaScript. It provides reactive data binding, event handling, component reuse, and tools for building applications of different sizes.

For example, an e-commerce application can be divided into components such as:

- `Header.vue` — navigation and branding
- `ProductList.vue` — displays available products
- `ProductCard.vue` — displays an individual product
- `Cart.vue` — manages shopping cart information
- `Footer.vue` — displays footer content

Each component manages a specific part of the interface, making the application easier to develop, test, and maintain.

### 1.2 Evolution of Vue.js

Vue.js was created by Evan You in 2014. It evolved from a lightweight library for building interactive interfaces into a comprehensive framework for developing modern web applications.

#### Vue.js Evolution Timeline

**Vue 1.x — Initial Release (2014–2016)**

Vue.js was initially introduced as a lightweight alternative for building interactive user interfaces.
Important characteristics:

- Reactive data binding.
- Declarative templates.
- Reusable UI components.
- Easy integration with existing HTML pages.
- A relatively small learning curve.

**Vue 2.x — Improved Component Architecture (2016)**

Vue 2 introduced improvements to rendering performance and application development.
Important characteristics:

- Virtual DOM-based rendering.
- Improved component architecture.
- Single File Components through build tools.
- Server-side rendering support.
- Better tooling and ecosystem support.
- Options API for organizing component logic.

Vue 2.7 was the final minor release of the Vue 2 series. Official Vue 2 support ended on December 31, 2023.

**Vue 3.x — Modern Vue Architecture (2020 onwards)**

Vue 3 introduced a redesigned internal architecture and modern development capabilities.
Important characteristics:

- Composition API.
- Improved TypeScript support.
- Better performance and tree-shaking.
- Multiple root elements in component templates.
- Teleport and Suspense.
- Improved reactivity implementation.
- `<script setup>` syntax for Single File Components.

Vue 3 is the recommended starting point for new projects.
Reference: https://vuejs.org/about/faq

### 1.3 Advantages of Vue.js
**1. Easy to Learn**
Vue uses familiar HTML, CSS, and JavaScript syntax. Developers with basic frontend knowledge can start building applications without learning a completely different programming language.
**2. Component Reusability**
Applications can be divided into independent components. The same component can be reused in different parts of an application.
**3. Reactive Data Binding**
When reactive data changes, Vue automatically updates the relevant parts of the user interface.
**4. Maintainable Architecture**
Components separate application logic, presentation, and styling. This makes debugging and modifying applications easier.
**5. Flexible Integration**
Vue can enhance an existing HTML page or power a complete Single Page Application.
**6. Composition API**
The Composition API allows related logic to be grouped together and reused through composable functions.
**7. Scoped Styling**
Scoped CSS helps prevent component styles from unintentionally affecting other components.
**8. TypeScript Support**
Vue 3 provides strong TypeScript integration, making it suitable for larger applications.
**9. Developer Tooling**
Vue DevTools and the official VS Code extension help developers inspect component hierarchies, reactive state, and application behavior.
**10. Performance**
Vue's reactivity system and rendering optimizations help update the interface efficiently when application state changes.
### 1.4 Limitations of Vue.js
- Developers must learn Vue-specific concepts such as directives, reactive references, props, and emits.
- Large applications require deliberate architectural decisions.
- Third-party library compatibility must be checked before integration.
- Vue-specific skills may be less common in some job markets than React skills.
- Server-side rendering and advanced state management require additional tools and knowledge.

## 2. Installation of Vue.js
### 2.1 Prerequisites
Install the following tools before creating a Vue project:
1. Node.js and npm.
2. Visual Studio Code or another code editor.
3. A modern web browser.
Verify the installation:
```bash
node --version
npm --version
```
Both commands should display installed version numbers.
The current Vue Quick Start guide specifies Node.js `^22.18.0` or `>=24.12.0` for its recommended project setup. Check the official documentation for updated requirements.
Reference: https://vuejs.org/guide/quick-start

### 2.2 Method 1: Create a Vue Project Using Vite

Vite is a frontend build tool used to run and build modern Vue applications.
Step 1: Open a terminal and navigate to your project directory.
```bash
cd D:\Javascript
```
Step 2: Create a Vue project.
```bash
npm create vue@latest
```
Step 3: Enter a project name.
```text
Project name: vue-component-poc
```
Step 4: Choose the additional features.
For a beginner component-design POC, you can initially select No for optional features such as TypeScript, Vue Router, Pinia, and testing tools. You can add them later.
Step 5: Navigate into the project.
```bash
cd vue-component-poc
```
Step 6: Install dependencies.
```bash
npm install
```
Step 7: Start the development server.
```bash
npm run dev
```
Step 8: Open the local URL displayed in the terminal, commonly:
```text
http://localhost:5173/
```
Step 9: Build the application for production.
```bash
npm run build
```
The production build is generated in the `dist` directory.
### 2.3 Typical Vue Project Structure
```text
vue-component-poc/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ProductCard.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

Explanation:

- `public/` contains static assets served directly.
- `src/components/` contains reusable Vue components.
- `App.vue` is the root component.
- `main.js` creates and mounts the Vue application.
- `index.html` provides the HTML entry point.
- `package.json` contains project dependencies and scripts.
- `vite.config.js` contains Vite configuration.

The exact files may vary according to the options selected during project creation.

### 2.4 Method 2: Use Vue Through a CDN

Vue can also be used directly in an HTML page without creating a build-tool project.

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue CDN Example</title>
</head>
<body>

    <div id="app">
        <h1>{{ message }}</h1>
        <button @click="changeMessage">
            Change Message
        </button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    message: "Hello, Vue.js!"
                };
            },

            methods: {
                changeMessage() {
                    this.message = "Vue is working!";
                }
            }
        }).mount("#app");
    </script>

</body>
</html>
```
Open the page in a browser while connected to the internet.
The initial message is displayed. Clicking the button changes the message without manually updating the DOM.
**Important:** The CDN approach is suitable for small examples and progressive enhancement. It does not directly support the normal `.vue` Single File Component workflow without additional tooling.
## 3. Types of Vue Development Approaches
The term "types" in Vue development can refer to different concepts. The following distinctions are important.
### 3.1 Types of Vue Application Setup
**1. CDN-Based Vue**
Vue is loaded using a script tag in an HTML document.
Use cases:
- Small interactive pages.
- Learning Vue basics.
- Enhancing existing websites.
- Simple prototypes.

**2. Build-Tool-Based Vue**

Vue is installed through npm and developed using tools such as Vite.

Use cases:

- Component-based applications.
- Applications using `.vue` files.
- Modern frontend development.
- Production web applications.

**3. Single Page Application (SPA)**

An SPA loads the main application shell and updates views dynamically without requiring a full page reload for each navigation.

Vue Router can be used to manage client-side navigation.

**4. Server-Side Rendering (SSR)**

The server generates HTML for a request, and Vue can hydrate that HTML in the browser to make it interactive.

**5. Static Site Generation (SSG)**

Pages are rendered into static HTML during a build process. This can improve initial page delivery and reduce runtime rendering requirements.

These approaches describe how a Vue application is delivered, not different Vue programming languages.

### 3.2 Types of Vue Component API Styles

Vue supports two main API styles.

#### Options API

The Options API organizes component logic into options such as `data`, `methods`, `computed`, and lifecycle hooks.

```vue
<script>
export default {
    data() {
        return {
            count: 0
        };
    },

    methods: {
        increment() {
            this.count++;
        }
    }
};
</script>

<template>
    <button @click="increment">
        Count: {{ count }}
    </button>
</template>
```

The `this` keyword refers to the component instance in the relevant Options API methods.

#### Composition API

The Composition API uses functions such as `ref()`, `reactive()`, `computed()`, and lifecycle hooks to organize component logic.

```vue
<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
    count.value++;
}
</script>

<template>
    <button @click="increment">
        Count: {{ count }}
    </button>
</template>
```

In JavaScript, a `ref` value is accessed using `.value`. In the template, Vue automatically unwraps refs in normal template expressions.

**Recommendation:** For this documentation and a new Vue 3 project, use Composition API with `<script setup>`.

# 4. Architecture and Component Design
## 4.1 Single File Components (SFCs)
### Definition

A Single File Component (SFC) is a `.vue` file that combines a component's template, JavaScript or TypeScript logic, and CSS styling in one file.

An SFC usually contains three sections:

- `<script setup>` — component logic and reactive state.
- `<template>` — the user interface.
- `<style scoped>` — component-specific CSS.

### Why It Is Used

SFCs are used to keep related code together, encourage reusable components, and simplify maintenance. Each component can represent a feature such as a product card, navigation bar, or login form.

### How It Works

1. Vue's build tooling processes the `.vue` file.
2. The script section defines state, functions, and imports.
3. The template describes the UI using HTML-like syntax.
4. The scoped style section defines component styles.
5. Vue renders the template and updates it when reactive state changes.

### Code Example

Create `src/components/ProductCard.vue`:

```vue
<script setup>
import { ref } from "vue";

const productName = ref("Laptop");
const price = ref(55000);
const quantity = ref(1);

function increaseQuantity() {
    quantity.value++;
}
</script>

<template>
    <div class="product-card">
        <h2>{{ productName }}</h2>

        <p>Price: ₹{{ price }}</p>

        <p>Quantity: {{ quantity }}</p>

        <button @click="increaseQuantity">
            Add Quantity
        </button>

        <p>Total: ₹{{ price * quantity }}</p>
    </div>
</template>

<style scoped>
.product-card {
    max-width: 320px;
    padding: 20px;
    border: 1px solid #dddddd;
    border-radius: 10px;
}

button {
    padding: 8px 12px;
    cursor: pointer;
}
</style>
```

Use the component inside `src/App.vue`:

```vue
<script setup>
import ProductCard from "./components/ProductCard.vue";
</script>

<template>
    <main>
        <h1>Product Store</h1>
        <ProductCard />
    </main>
</template>
```

### Expected Behavior

The page displays a laptop product card with its price and quantity. Clicking Add Quantity increases the quantity and updates the total automatically.

### Important Concepts

- `ref()` creates a reactive reference.
- `{{ }}` displays dynamic values in a template.
- `@click` registers a click event handler.
- `<style scoped>` limits the intended CSS styling to the component.
- Components can import and reuse other components.

---

## 4.2 Component Communication: Props and Emit

### Definition

Component communication allows different components to exchange data and notify one another about user interactions.

Vue commonly uses:

- **Props:** Parent-to-child data flow.
- **Emits:** Child-to-parent event notifications.

### Why It Is Used

In a component-based application, the parent often manages shared data while child components display that data or allow users to interact with it.

For example, a product-list component can pass a product name and price to a product-card component. The card can emit an event when a user adds the product to the cart.

### A. Props: Parent-to-Child Communication

Props are inputs declared by a child component. The parent supplies their values through component attributes.

Create `src/components/ProductCard.vue`:

```vue
<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <div class="product-card">
        <h2>{{ name }}</h2>
        <p>Price: ₹{{ price }}</p>
    </div>
</template>

<style scoped>
.product-card {
    padding: 16px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
</style>
```

Use it in `src/App.vue`:

```vue
<script setup>
import ProductCard from "./components/ProductCard.vue";
</script>

<template>
    <h1>Available Products</h1>

    <ProductCard
        name="Laptop"
        :price="55000"
    />

    <ProductCard
        name="Keyboard"
        :price="1500"
    />
</template>
```

Explanation:

- `name="Laptop"` passes a string.
- `:price="55000"` passes a JavaScript number.
- The colon is shorthand for `v-bind:`.
- `defineProps()` declares the inputs accepted by the child.

Props should be treated as read-only inputs. If the child needs to request a change, it should emit an event rather than directly modifying a prop.

### B. Emit: Child-to-Parent Communication

An emitted event allows the child to notify the parent that something happened.

Update `src/components/ProductCard.vue`:

```vue
<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(["add-to-cart"]);

function addToCart() {
    emit("add-to-cart");
}
</script>

<template>
    <div class="product-card">
        <h2>{{ name }}</h2>
        <p>Price: ₹{{ price }}</p>

        <button @click="addToCart">
            Add to Cart
        </button>
    </div>
</template>
```

Update `src/App.vue`:

```vue
<script setup>
import { ref } from "vue";
import ProductCard from "./components/ProductCard.vue";

const cartCount = ref(0);

function handleAddToCart() {
    cartCount.value++;
}
</script>

<template>
    <h1>Product Store</h1>

    <p>Cart Items: {{ cartCount }}</p>

    <ProductCard
        name="Laptop"
        :price="55000"
        @add-to-cart="handleAddToCart"
    />
</template>
```

### Expected Behavior

When the user clicks Add to Cart:

1. The child calls `emit("add-to-cart")`.
2. The parent receives the event.
3. The parent executes `handleAddToCart()`.
4. `cartCount` increases.
5. Vue updates the displayed cart count.

### Passing Data Through an Event

The child can also send a value with the event.

Child:

```javascript
emit("add-to-cart", props.name);
```

For this form, declare the props using a named variable:

```javascript
const props = defineProps({
    name: String
});

const emit = defineEmits(["add-to-cart"]);
```

Parent:

```html
<ProductCard
    name="Laptop"
    @add-to-cart="handleAddToCart"
/>
```

 Parent handler:
 ```js
function handleAddToCart(productName) {
    console.log("Added product:", productName);
}
```
### Communication Flow
```text
Parent Component
      |
      | Passes props
      v
Child Component
      |
      | Emits an event
      v
Parent Event Handler
      |
      v
Parent Updates State
      |
      v
Vue Updates the UI
```

---

## 4.3 Slots System

### Definition

Slots allow a parent component to pass template content into a child component. Instead of hardcoding all the child content, the component provides a reusable structure with customizable content areas.

Vue supports default slots, named slots, and scoped slots.

### Why It Is Used

Slots are useful when multiple pages or features need the same layout but different content.

For example, several dialog boxes may share the same border, title area, and footer structure while displaying different messages and buttons.

### A. Default Slot

A default slot accepts content inserted between the child component's opening and closing tags.

Create `src/components/BaseCard.vue`:

```vue
<template>
    <div class="card">
        <slot>
            Default card content
        </slot>
    </div>
</template>

<style scoped>
.card {
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
</style>
```

Use it in `src/App.vue`:

```vue
<script setup>
import BaseCard from "./components/BaseCard.vue";
</script>

<template>
    <BaseCard>
        <h2>Order Summary</h2>
        <p>Your order contains three products.</p>
    </BaseCard>

    <BaseCard>
        <p>Your cart is empty.</p>
    </BaseCard>
</template>
```

The first card displays an order summary, while the second displays an empty-cart message.

The text inside `<slot>` acts as fallback content when the parent does not supply slot content.

### B. Named Slots

Named slots allow a child component to expose multiple content areas.

Create `src/components/BaseLayout.vue`:

```vue
<template>
    <div class="layout">
        <header>
            <slot name="header">
                Default Header
            </slot>
        </header>

        <main>
            <slot>
                Default Main Content
            </slot>
        </main>

        <footer>
            <slot name="footer">
                Default Footer
            </slot>
        </footer>
    </div>
</template>

<style scoped>
header,
main,
footer {
    padding: 15px;
    border: 1px solid #dddddd;
}

header {
    background: #f3f3f3;
}

footer {
    background: #eeeeee;
}
</style>
```

Use it in `src/App.vue`:

```vue
<script setup>
import BaseLayout from "./components/BaseLayout.vue";
</script>

<template>
    <BaseLayout>
        <template #header>
            <h1>Online Store</h1>
        </template>

        <template #default>
            <p>Welcome to our product catalog.</p>
        </template>

        <template #footer>
            <p>Contact: support@example.com</p>
        </template>
    </BaseLayout>
</template>
```

Explanation:

- `#header` is shorthand for `v-slot:header`.
- `#default` identifies the default slot.
- The child controls the layout.
- The parent supplies the content for each slot.

### C. Scoped Slots

Scoped slots allow a child component to expose its own data to the template supplied by the parent.

Create `src/components/ProductList.vue`:

```vue
<script setup>
import { ref } from "vue";

const products = ref([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Keyboard", price: 1500 },
    { id: 3, name: "Mouse", price: 800 }
]);
</script>

<template>
    <ul>
        <li
            v-for="product in products"
            :key="product.id"
        >
            <slot :product="product">
                {{ product.name }} - ₹{{ product.price }}
            </slot>
        </li>
    </ul>
</template>
```

Use it in `src/App.vue`:

```vue
<script setup>
import ProductList from "./components/ProductList.vue";
</script>

<template>
    <h1>Product Catalog</h1>

    <ProductList>
        <template #default="{ product }">
            <strong>{{ product.name }}</strong>
            <span> — ₹{{ product.price }}</span>
        </template>
    </ProductList>
</template>
```
### Expected Behavior

The product-list component iterates through its products and exposes each product through the slot. The parent decides how each product should be displayed.

### Comparison of Slot Types

| Slot Type    | Purpose                                       | Example                             |
|--------------|-----------------------------------------------|-------------------------------------|
| Default slot | Passes general content                        | `<BaseCard>Content</BaseCard>`      |
| Named slot   | Passes content into a specific area           | `<template #header>`                |
| Scoped slot  | Exposes child data to parent-provided content | `<template #default="{ product }">` |

### Important Concepts

Slots separate a component's structure from its content. Named slots support multiple content areas, while scoped slots allow flexible rendering using data exposed by the child.

## 4.4 Provide / Inject
### Definition

Provide / Inject is Vue's dependency-injection mechanism. It allows an ancestor component to make data or functionality available to descendant components without passing it manually through every intermediate component.
- `provide()` makes a value available to descendants.
- `inject()` retrieves a value from the nearest ancestor that provides the matching key.
### Why It Is Used
Consider a component hierarchy in which the root component contains a layout, the layout contains a sidebar, and the sidebar contains a deeply nested user-profile component.
If the user information is needed only by the profile, passing it through every intermediate component creates unnecessary props.
Provide / Inject helps avoid this prop drilling.
### How It Works
1. An ancestor calls `provide()` with a key and value.
2. Vue makes that value available to descendant components.
3. A descendant calls `inject()` with the same key.
4. Vue resolves the nearest matching provider in the component hierarchy.
5. The descendant can use the injected value.
### Code Example
Create `src/App.vue`:
```vue
<script setup>
import { provide, ref } from "vue";
import UserLayout from "./components/UserLayout.vue";

const username = ref("Vaishu");

provide("username", username);
</script>

<template>
    <h1>Dashboard</h1>

    <UserLayout />
</template>
```

Create `src/components/UserLayout.vue`:

```vue
<script setup>
import UserProfile from "./UserProfile.vue";
</script>

<template>
    <section>
        <h2>User Layout</h2>

        <UserProfile />
    </section>
</template>
```

Create `src/components/UserProfile.vue`:

```vue
<script setup>
import { inject } from "vue";

const username = inject("username");
</script>

<template>
    <div>
        <h3>User Profile</h3>

        <p>Welcome, {{ username }}!</p>
    </div>
</template>
```

### Expected Output

```text
Dashboard

User Layout

User Profile

Welcome, Vaishu!
```

The `UserProfile` component receives the username directly from the root provider even though `UserLayout` does not receive or forward the username as a prop.

### Providing Reactive Data

In the example, `username` is a `ref`. Injecting the ref preserves its reactivity. If the provider changes its value, the descendant's displayed value updates automatically.

For example, add a button in `App.vue`:

```vue
<button @click="username = 'New User'">
    Change Username
</button>
```

Because `username` is a ref declared in `<script setup>`, template assignment updates its value.

### Providing Functions

A provider can also expose a function for controlled updates.

In `App.vue`:

```vue
<script setup>
import { provide, ref } from "vue";

const username = ref("Vaishu");

function updateUsername(newName) {
    username.value = newName;
}

provide("username", username);
provide("updateUsername", updateUsername);
</script>
```

In `UserProfile.vue`:

```vue
<script setup>
import { inject } from "vue";

const username = inject("username");
const updateUsername = inject("updateUsername");
</script>

<template>
    <div>
        <p>Welcome, {{ username }}!</p>

        <button @click="updateUsername('Guest')">
            Change User
        </button>
    </div>
</template>
```
The descendant requests a change by calling the provided function. This keeps the state update logic in the provider.

### Important Concepts

- The injection key must match the provider's key.
- The nearest matching provider takes precedence.
- Reactive refs remain reactive when injected.
- Provide / Inject is useful for shared dependencies within a component subtree.
- For larger application-wide state management, consider Pinia rather than using Provide / Inject for every shared state requirement.
# 5. Comparison of Component Design Concepts

| Concept                | Main Purpose                                           | Typical Direction                     |
|------------------------|--------------------------------------------------------|---------------------------------------|
| Single File Components | Organize template, logic, and styles                   | Component structure                   |
| Props                  | Supply data to a child                                 | Parent → Child                        |
| Emit                   | Notify a parent about an event                         | Child → Parent                        |
| Default Slot           | Supply general template content                        | Parent supplies content               |
| Named Slot             | Supply content to a specific area                      | Parent supplies named content         |
| Scoped Slot            | Render child-provided data using parent-defined markup | Child exposes data to parent template |
| Provide / Inject       | Share dependencies across a component subtree          | Ancestor → Descendant                 |

## 5.1 Choosing the Right Approach

Use SFCs to structure individual components. Use props and emits for explicit communication between parents and children. Use slots when the parent should customize a child's layout or content. Use Provide / Inject when a value or service is required by deeply nested descendants and passing it through every intermediate component would be unnecessary.

These approaches can be combined in the same application.
# 6. Overall Component Architecture

Consider an e-commerce application with the following hierarchy:

```text
App.vue
│
├── Header.vue
│
├── ProductList.vue
│   │
│   ├── ProductCard.vue
│   ├── ProductCard.vue
│   └── ProductCard.vue
│
├── Cart.vue
│
└── Footer.vue
```

The components work together as follows:

1. `App.vue` acts as the root component and can provide application-level dependencies.
2. `Header.vue` displays navigation and other header content.
3. `ProductList.vue` manages the product-list presentation.
4. Each `ProductCard.vue` receives product information through props.
5. A product card emits an event when the user adds a product to the cart.
6. The parent handles the event and updates the relevant state.
7. Slots allow reusable components to accept customized content.
8. Provide / Inject makes selected dependencies available to deeply nested components.

The result is a modular architecture in which each component has a clear responsibility.
# 7. Best Practices

1. Keep each component focused on a clear responsibility.
2. Use descriptive component names such as `ProductCard.vue` and `UserProfile.vue`.
3. Prefer props for inputs and emits for notifying parents about changes.
4. Avoid directly mutating props inside child components.
5. Use slots when the parent needs to control the content rendered inside a reusable component.
6. Use scoped CSS to reduce unintended styling conflicts.
7. Keep state ownership clear when using Provide / Inject.
8. Use `ref()` for reactive primitive values and `reactive()` when an object-based reactive structure is appropriate.
9. Use stable keys with `v-for`, such as `:key="product.id"`.
10. Use Composition API with `<script setup>` for new Vue 3 applications when a build-tool workflow is appropriate.
11. Prefer explicit injection keys, often Symbols in larger TypeScript projects, to avoid key collisions.
12. Use Vue DevTools to inspect component hierarchies and reactive state.

Vue.js provides a component-based architecture for building interactive and maintainable user interfaces. Vue 3, together with Composition API and Single File Components, offers a modern approach to organizing frontend code.

The four component-design concepts serve different purposes:

- **SFCs** organize component logic, templates, and styles.
- **Props and Emits** establish explicit parent-child communication.
- **Slots** make reusable components flexible by allowing customizable content.
- **Provide / Inject** shares dependencies with deeply nested descendants without excessive prop passing.