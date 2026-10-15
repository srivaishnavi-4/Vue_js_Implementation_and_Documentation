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

# ref() vs reactive()
## 1. Definition
Vue 3 provides `ref()` and `reactive()` to create reactive state. When reactive data changes, Vue automatically updates the dependent UI.
## 2. ref()
**Definition:** `ref()` creates a reactive reference that stores a value. In JavaScript, the value is accessed through `.value`.

**Why it is used:**
- To store strings, numbers, and booleans.
- To manage search inputs, loading states, and selected filters.
- To store objects and arrays when the entire value may need replacement.

**Example:**

```js
import { ref } from 'vue'

const count = ref(0)
const username = ref('Vaishu')

count.value++

console.log(count.value) // 1
```

**Real-time use case:** A counter, search input, login status, or loading indicator.

## 3. reactive()

**Definition:** `reactive()` creates a reactive proxy for a supported JavaScript object. Its properties can be accessed directly without `.value`.

**Why it is used:**
- To group related properties into one object.
- To manage forms, user profiles, and application settings.
- To track changes to nested object properties.

**Example:**

```js
import { reactive } from 'vue'

const taskForm = reactive({
  title: '',
  priority: 'Medium',
  completed: false
})

taskForm.title = 'Learn Vue'
taskForm.priority = 'High'
```

**Real-time use case:** A task form containing a title, priority, due date, and description.

## 4. Difference Between ref() and reactive()

| Feature | ref() | reactive() |
|---|---|---|
| Primitive values | Supported | Not intended for primitives |
| Objects and arrays | Supported | Supported |
| JavaScript access | `.value` | Direct property access |
| Nested reactivity | Yes, for normal object values | Yes |
| Replace entire value | Assign to `.value` | Reassignment loses the original proxy connection |

## 5. Using Both in One Component

```js
import { ref, reactive } from 'vue'

// Individual value
const searchText = ref('')

// Grouped form state
const taskForm = reactive({
  title: '',
  priority: 'Medium'
})

// Update state
searchText.value = 'Vue'
taskForm.title = 'Learn Vue'
```

Here, `ref()` manages the search text, while `reactive()` manages related form fields.

## 6. Important Points

- Use `ref()` for standalone values and replaceable state.
- Use `reactive()` for grouped object properties.
- Both support deep reactivity by default for normal nested objects.
- Use `.value` when accessing refs in JavaScript.
- In Vue templates, top-level refs are automatically unwrapped.
- Avoid destructuring reactive objects directly if you need to preserve reactivity. Use `toRefs()` or `toRef()` when necessary.

## 7. Conclusion

`ref()` and `reactive()` are both used to manage reactive state in Vue 3. Choose `ref()` for individual values and whole-value replacement, and `reactive()` for objects whose properties are updated directly. Both allow Vue to update the UI when tracked state changes.

# Vue.js Computed Properties and Watchers

## 1. Introduction

In Vue.js, `computed()`, `watch()`, and `watchEffect()` are reactive APIs used to work with changing data.

They help us calculate values, respond to data changes, and perform side effects such as API calls.

For example, consider an e-commerce application:

- `computed()` calculates the total price of products in a cart.
- `watch()` observes a search input and fetches products when the search term changes.
- `watchEffect()` automatically tracks the reactive values used inside a function and runs the function when those values change.

Although these APIs work with reactive data, each one has a different purpose.

## 2. Computed Properties

### Definition

A computed property is a reactive value derived from other reactive values.

In Vue 3 Composition API, we use the `computed()` function to create computed properties.

A computed property automatically recalculates its value when its reactive dependencies change. It also caches the calculated result until one of those dependencies changes.

### Why Do We Use computed()?

We use `computed()` when we need to calculate a value from existing data.

Common use cases include:

- Calculating the total price of products in a shopping cart.
- Filtering products based on a search term.
- Calculating discounts and tax amounts.
- Checking whether a form is valid.
- Deriving a user's full name from their first and last names.
- Displaying the number of completed tasks.
- Sorting or transforming data for display.

### How Does computed() Work?

The workflow is:

1. Vue tracks the reactive values accessed inside the computed getter.
2. Vue executes the getter when the computed value is needed for the first time.
3. Vue stores the calculated result in a cache.
4. When the computed value is accessed again without any dependency changes, Vue returns the cached result.
5. When a tracked dependency changes, Vue marks the computed value as dirty.
6. The next time the computed value is accessed, Vue recalculates it.

This behavior is called **lazy evaluation and caching**.

### Syntax

```javascript
import { ref, computed } from 'vue'

const count = ref(0)

const doubleCount = computed(() => {
  return count.value * 2
})
```

Here:

- `count` is a reactive value.
- `computed()` creates a derived reactive value.
- `count.value * 2` is the calculation.
- `doubleCount.value` provides the calculated result.

When using `ref()` inside JavaScript, we access or update its value through `.value`. In Vue templates, refs are automatically unwrapped in most normal template expressions.

### Example 1: Calculating a Total Price

Consider an e-commerce application where a customer adds products to a shopping cart.

```vue
<script setup>
import { ref, computed } from 'vue'

const productPrice = ref(500)
const quantity = ref(2)

const totalPrice = computed(() => {
  return productPrice.value * quantity.value
})
</script>

<template>
  <h2>Shopping Cart</h2>

  <p>Product Price: ₹{{ productPrice }}</p>
  <p>Quantity: {{ quantity }}</p>

  <h3>Total Price: ₹{{ totalPrice }}</h3>

  <button @click="quantity++">
    Add One More
  </button>
</template>
```

**Expected output initially:**

```text
Shopping Cart
Product Price: ₹500
Quantity: 2
Total Price: ₹1000
```

After clicking the button once:

```text
Shopping Cart
Product Price: ₹500
Quantity: 3
Total Price: ₹1500
```

**Explanation:**

Initially, `quantity` is `2` and `productPrice` is `500`.

The computed property calculates:

```javascript
500 * 2 = 1000
```

When the customer clicks the button, `quantity` changes to `3`.

Vue detects the dependency change and recalculates the total when the computed value is next needed.

```javascript
500 * 3 = 1500
```

We do not have to manually update `totalPrice`.

### Example 2: Filtering Products

Suppose an application displays multiple products, and users need to search for a specific product.

```vue
<script setup>
import { ref, computed } from 'vue'

const searchTerm = ref('')

const products = ref([
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Mobile', price: 20000 },
  { id: 3, name: 'Headphones', price: 3000 },
  { id: 4, name: 'Keyboard', price: 1500 }
])

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())
  )
})
</script>

<template>
  <h2>Product Search</h2>

  <input
    v-model="searchTerm"
    placeholder="Search products"
  />

  <ul>
    <li
      v-for="product in filteredProducts"
      :key="product.id"
    >
      {{ product.name }} - ₹{{ product.price }}
    </li>
  </ul>
</template>
```

**Expected behavior:**

When the search box is empty, all four products appear.

When the user types `mobile`, the filtered list contains:

```text
Mobile - ₹20000
```

When the user types `lap`, the filtered list contains:

```text
Laptop - ₹50000
```

**Why is computed() useful here?**

The filtered list depends on `products` and `searchTerm`.

Whenever the search term changes, Vue invalidates the computed result. The next access calculates the filtered list using the updated term.

If the dependencies do not change, Vue can reuse the cached result instead of executing the filtering logic again.

This is useful when working with large product lists or expensive calculations.

### Example 3: Computed Property for Task Management

In a task management application, we may need to display the number of completed tasks.

```vue
<script setup>
import { ref, computed } from 'vue'

const tasks = ref([
  { id: 1, title: 'Learn Vue', completed: true },
  { id: 2, title: 'Practice computed()', completed: false },
  { id: 3, title: 'Learn watchers', completed: true }
])

const completedTaskCount = computed(() => {
  return tasks.value.filter(task => task.completed).length
})
</script>

<template>
  <h2>Task Dashboard</h2>

  <p>Completed Tasks: {{ completedTaskCount }}</p>

  <ul>
    <li v-for="task in tasks" :key="task.id">
      <label>
        <input type="checkbox" v-model="task.completed" />
        {{ task.title }}
      </label>
    </li>
  </ul>
</template>
```

**Expected output initially:**

```text
Task Dashboard
Completed Tasks: 2
```

When the user checks or unchecks a task, the completed task count updates automatically.

This is a typical use case for `computed()` because the count is derived from the existing task data.

### Important Characteristics of computed()

1. **Reactive:** Updates when tracked dependencies change.
2. **Cached:** Reuses its result while dependencies remain unchanged.
3. **Lazy:** Recalculates when the computed value is needed after invalidation.
4. **Declarative:** Describes what value should be calculated, rather than manually updating it.
5. **Read-only by default:** A computed property created with a getter cannot normally be assigned a new value directly.

### Writable Computed Properties

Computed properties are read-only by default, but Vue also supports writable computed properties.

```javascript
import { ref, computed } from 'vue'

const firstName = ref('Vaishu')
const lastName = ref('Kumar')

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },

  set(newValue) {
    const names = newValue.split(' ')

    firstName.value = names[0] ?? ''
    lastName.value = names.slice(1).join(' ')
  }
})

console.log(fullName.value)
// Vaishu Kumar

fullName.value = 'Priya Sharma'

console.log(firstName.value)
// Priya

console.log(lastName.value)
// Sharma
```

The getter returns the derived full name. The setter handles an assignment by updating the underlying reactive values.

Writable computed properties are useful when a derived value needs to act as a two-way interface to its underlying data.

Note: This simple example splits the name on spaces and is intended for demonstration, not for handling every possible name format.

### When Should We Use computed()?

Use `computed()` when:

- A value can be derived from existing reactive state.
- The calculation should update automatically.
- You want Vue to cache a derived value.
- You need filtered, sorted, or aggregated data for the UI.

Avoid using a computed getter to perform side effects such as API requests, modifying other state, or manually manipulating the DOM. Computed getters should ideally be pure calculations.

---

## 3. Watchers in Vue.js

### Definition

A watcher is a reactive mechanism that observes changes to specified reactive sources and executes a callback when those sources change.

Vue 3 provides two commonly used watcher APIs:

- `watch()`
- `watchEffect()`

Unlike `computed()`, which produces a derived value, watchers are primarily used to perform side effects.

### What Is a Side Effect?

A side effect is an operation that does something beyond returning a calculated value.

Examples include:

- Sending an API request.
- Saving data to local storage.
- Logging changes.
- Updating the document title.
- Starting or stopping a timer.
- Responding to route changes.
- Synchronizing data with an external system.

For example, when a user enters a search term, we may need to call a backend API to retrieve matching products. This is an appropriate use case for a watcher.

---

## 4. watch()

### Definition

`watch()` observes an explicitly specified reactive source and runs a callback when the source changes.

It allows us to control exactly which reactive value or values should trigger the callback.

### Why Do We Use watch()?

We use `watch()` when a particular data change should trigger a specific action.

Typical use cases include:

- Calling an API when a search term changes.
- Saving user preferences when a setting changes.
- Responding to changes in a selected product ID.
- Updating external systems when application state changes.
- Watching a route parameter.
- Running validation when a particular field changes.

### Syntax

```javascript
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log('New value:', newValue)
  console.log('Old value:', oldValue)
})
```

Here:

- `count` is the source being watched.
- `newValue` is the current value when the callback runs.
- `oldValue` is the previous value.
- The callback runs when the watched source changes.

By default, `watch()` is lazy: it does not run its callback immediately when created. It runs when the watched source changes. The `immediate: true` option can make it run once during initialization.

### Example 1: Watching a Search Input

Consider a product search page that logs the search term whenever it changes.

```vue
<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')

watch(searchTerm, (newValue, oldValue) => {
  console.log('Search term changed')
  console.log('Previous:', oldValue)
  console.log('Current:', newValue)
})
</script>

<template>
  <h2>Search Products</h2>

  <input
    v-model="searchTerm"
    placeholder="Enter product name"
  />
</template>
```

When the user enters `Laptop`, the watcher responds to the change.

The console will show the previous and current values for the change that triggered it. The exact previous value depends on the user's input sequence.

For example, if the previous value was empty:

```text
Search term changed
Previous:
Current: Laptop
```

**Explanation:**

1. The user types into the input.
2. `v-model` updates `searchTerm`.
3. Vue detects the watched source change.
4. The callback runs with the new and previous values.

This example demonstrates watching data. A real API search would normally add an API request and often a debounce to avoid sending a request for every keystroke.

### Example 2: Watching a Value and Performing an API Request

Suppose an application loads product details based on a selected product ID.

```vue
<script setup>
import { ref, watch } from 'vue'

const productId = ref(1)
const product = ref(null)
const loading = ref(false)
const errorMessage = ref('')

watch(
  productId,
  async (newId) => {
    loading.value = true
    errorMessage.value = ''

    try {
      const response = await fetch(
        `https://dummyjson.com/products/${newId}`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }

      product.value = await response.json()
    } catch (error) {
      product.value = null
      errorMessage.value = error.message
    } finally {
      loading.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <h2>Product Details</h2>

  <button @click="productId = 1">Product 1</button>
  <button @click="productId = 2">Product 2</button>
  <button @click="productId = 3">Product 3</button>

  <p v-if="loading">Loading product...</p>
  <p v-else-if="errorMessage">{{ errorMessage }}</p>

  <div v-else-if="product">
    <h3>{{ product.title }}</h3>
    <p>Price: ${{ product.price }}</p>
  </div>
</template>
```

**How it works:**

1. `productId` starts at `1`.
2. Because `immediate: true` is configured, the watcher runs during initialization.
3. The callback requests the selected product from the API.
4. The response is stored in `product`.
5. When the user clicks another product button, `productId` changes.
6. The watcher runs again and requests the new product.

This is a realistic use case for `watch()` because changing the selected product ID should trigger an external operation.

For production applications, consider cancelling or ignoring stale requests if the user changes the ID rapidly. Otherwise, an earlier, slower request could overwrite a newer result.

### Watching Multiple Sources

We can watch more than one source using an array.

```javascript
import { ref, watch } from 'vue'

const firstName = ref('Vaishu')
const lastName = ref('Kumar')

watch(
  [firstName, lastName],
  ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
    console.log('Name changed')

    console.log('New:', newFirstName, newLastName)
    console.log('Old:', oldFirstName, oldLastName)
  }
)
```

The callback runs when either `firstName` or `lastName` changes.

This is useful when an action depends on several independently reactive values.

### Immediate Watchers

By default, a watcher's callback does not execute until its source changes.

We can enable immediate execution with an option:

```javascript
watch(
  productId,
  (newId) => {
    console.log('Load product:', newId)
  },
  { immediate: true }
)
```

The callback runs once when the watcher is created and then again whenever `productId` changes.

### Deep Watchers

When watching an object or array, we may want to detect nested mutations.

```javascript
import { reactive, watch } from 'vue'

const user = reactive({
  name: 'Vaishu',
  address: {
    city: 'Chennai'
  }
})

watch(
  user,
  (newValue, oldValue) => {
    console.log('User data changed')
  }
)

user.address.city = 'Madurai'
```

In this example, directly watching the reactive object creates a deep watcher by default, so nested changes are observed.

For a getter or ref that returns an object, nested changes generally require `{ deep: true }` if we want to observe them without replacing the object.

```javascript
watch(
  () => user.address,
  () => {
    console.log('Address changed')
  },
  { deep: true }
)
```

**Important:** Deep watchers can be expensive when used on large, deeply nested structures. On nested mutations, `newValue` and `oldValue` may refer to the same object because the object itself was not replaced.

### Stopping a Watcher

Watchers created synchronously inside a component's `setup()` or `<script setup>` are automatically stopped when the component is unmounted.

For manually created watchers, Vue also returns a stop function.

```javascript
const stopWatching = watch(count, (newValue) => {
  console.log(newValue)
})

// Stop observing count
stopWatching()
```

This is useful when a watcher should run only for a limited period.

---

## 5. watchEffect()

### Definition

`watchEffect()` automatically tracks the reactive dependencies accessed during the synchronous execution of its callback and reruns the callback when those dependencies change.

Unlike `watch()`, it does not require us to specify the watched sources explicitly.

### Why Do We Use watchEffect()?

We use `watchEffect()` when an operation depends on reactive values that can be detected automatically from the callback.

Common use cases include:

- Synchronizing the document title with reactive data.
- Logging reactive state used by an effect.
- Synchronizing data with an external library.
- Running a side effect that depends on several reactive values.
- Performing setup and cleanup for external resources.

### Syntax

```javascript
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log('Count:', count.value)
})
```

### How Does watchEffect() Work?

1. Vue executes the callback immediately when the effect is created.
2. Vue tracks the reactive values accessed during its synchronous execution.
3. When a tracked value changes, Vue reruns the callback.
4. If the callback accesses different reactive values during a later run, the tracked dependencies can change accordingly.

### Example 1: Automatically Tracking Dependencies

```vue
<script setup>
import { ref, watchEffect } from 'vue'

const firstName = ref('Vaishu')
const lastName = ref('Kumar')

watchEffect(() => {
  console.log(
    `Full Name: ${firstName.value} ${lastName.value}`
  )
})
</script>

<template>
  <h2>User Profile</h2>

  <input v-model="firstName" placeholder="First name" />
  <input v-model="lastName" placeholder="Last name" />

  <p>{{ firstName }} {{ lastName }}</p>
</template>
```

**Expected console output initially:**

```text
Full Name: Vaishu Kumar
```

When `firstName` changes to `Priya`, the effect reruns:

```text
Full Name: Priya Kumar
```

When `lastName` changes to `Sharma`, the effect reruns:

```text
Full Name: Priya Sharma
```

**Explanation:**

We did not explicitly tell Vue to watch `firstName` and `lastName`.

Vue automatically tracks both values because they are accessed inside the `watchEffect()` callback.

This is the main difference between `watch()` and `watchEffect()`.

### Example 2: Synchronizing the Document Title

Suppose an application needs to display the current notification count in the browser tab title.

```vue
<script setup>
import { ref, watchEffect } from 'vue'

const notificationCount = ref(0)

watchEffect(() => {
  document.title =
    `Notifications (${notificationCount.value})`
})
</script>

<template>
  <h2>Notifications</h2>

  <p>Unread notifications: {{ notificationCount }}</p>

  <button @click="notificationCount++">
    Add Notification
  </button>
</template>
```

Initially, the browser tab title becomes:

```text
Notifications (0)
```

After clicking the button once:

```text
Notifications (1)
```

The effect automatically tracks `notificationCount` and updates the document title when it changes.

This is a side effect because it modifies the browser document rather than merely calculating a value.

### Cleanup in watchEffect()

Sometimes an effect creates a resource that needs cleanup, such as an event listener or timer.

Vue provides `onCleanup` inside the `watchEffect()` callback.

```javascript
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect((onCleanup) => {
  const timerId = setInterval(() => {
    console.log('Current count:', count.value)
  }, 1000)

  onCleanup(() => {
    clearInterval(timerId)
  })
})
```

When the effect is about to rerun or is stopped, the cleanup callback clears the previous interval.

This prevents old intervals from continuing to run.

In a real application, avoid creating unnecessary timers. This example demonstrates how to manage resources created by an effect.

**Important:** In asynchronous effects, Vue tracks dependencies accessed during the synchronous portion of the callback. Reactive values first accessed after an `await` are not automatically tracked by that effect.

---

## 6. Difference Between computed(), watch(), and watchEffect()

| Feature | computed() | watch() | watchEffect() |
|---|---|---|---|
| Main purpose | Derive a value | React to specified changes | Run a reactive side effect |
| Returns | A computed ref | A stop function | A stop function |
| Dependency tracking | Automatic | Explicit sources | Automatic |
| Callback execution | Lazy calculation | On source change by default | Immediately, then on tracked changes |
| Caches a calculated result | Yes | No derived-value cache | No derived-value cache |
| Provides old and new values | No callback arguments | Yes | No |
| Performs API calls | Usually not appropriate | Yes | Yes, when appropriate |
| Best use case | Derived values | Controlled side effects | Automatically tracked effects |

### Simple Example of All Three

```javascript
import { ref, computed, watch, watchEffect } from 'vue'

const price = ref(100)
const quantity = ref(2)

// 1. Derive a value
const totalPrice = computed(() => {
  return price.value * quantity.value
})

// 2. React to a specific source
watch(quantity, (newQuantity, oldQuantity) => {
  console.log('Quantity changed:', oldQuantity, '->', newQuantity)
})

// 3. Automatically track dependencies
watchEffect(() => {
  console.log('Current total:', totalPrice.value)
})

quantity.value = 3
```

**Conceptual output:**

```text
Current total: 200
Quantity changed: 2 -> 3
Current total: 300
```

The exact order of watcher logs can depend on Vue's scheduling and flush configuration. The important behavior is that the computed total changes from `200` to `300`, the `watch()` callback receives the quantity change, and `watchEffect()` reruns because it accessed the computed total.

---

## 7. Real-Time Application Example: Shopping Cart

Consider an online shopping application.

The application needs to:

1. Calculate the cart total.
2. Display whether the cart qualifies for free shipping.
3. Save the cart quantity to local storage when it changes.
4. Log the updated total.

```vue
<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

const productPrice = ref(500)
const quantity = ref(1)

const totalPrice = computed(() => {
  return productPrice.value * quantity.value
})

const qualifiesForFreeShipping = computed(() => {
  return totalPrice.value >= 1000
})

watch(quantity, (newQuantity) => {
  localStorage.setItem('cartQuantity', String(newQuantity))
})

watchEffect(() => {
  console.log('Cart total:', totalPrice.value)
})
</script>

<template>
  <h2>Shopping Cart</h2>

  <p>Product Price: ₹{{ productPrice }}</p>
  <p>Quantity: {{ quantity }}</p>
  <p>Total: ₹{{ totalPrice }}</p>

  <p v-if="qualifiesForFreeShipping">
    Your order qualifies for free shipping!
  </p>

  <p v-else>
    Add more products to qualify for free shipping.
  </p>

  <button @click="quantity++">
    Add Item
  </button>

  <button
    @click="quantity--"
    :disabled="quantity <= 1"
  >
    Remove Item
  </button>
</template>
```

### Workflow

**Step 1: User changes the quantity**

When the user clicks `Add Item`, the quantity increases.

**Step 2: Computed properties update**

`totalPrice` recalculates when accessed after its dependencies change. `qualifiesForFreeShipping` derives its result from the total.

**Step 3: The watcher executes**

The `watch()` callback saves the updated quantity to local storage.

**Step 4: The effect executes**

`watchEffect()` reruns because it accesses `totalPrice`.

**Step 5: The UI updates**

Vue updates the displayed quantity, total price, and shipping message.

For production use, validate cart quantities and handle local-storage failures as appropriate. This example stores only the quantity; a full cart would normally persist product identifiers and other relevant information.

---

## 8. Performance Optimization Best Practices

### 8.1 Use computed() for Derived Values

Avoid repeatedly calculating the same derived data inside template expressions or ordinary functions when a computed property is more appropriate.

```javascript
const total = computed(() => {
  return items.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
})
```

Vue caches the result until the reactive dependencies change.

### 8.2 Keep Computed Getters Pure

A computed getter should calculate and return a value without changing other state.

Avoid this:

```javascript
const total = computed(() => {
  quantity.value++
  return price.value * quantity.value
})
```

This is incorrect because evaluating the computed getter modifies the state it depends on.

Prefer this:

```javascript
const total = computed(() => {
  return price.value * quantity.value
})
```

Update the state in an event handler or an appropriate action instead.

### 8.3 Avoid Unnecessary Deep Watchers

Deep watchers may traverse many nested properties, which can be expensive for large objects.

Watch the specific property or source needed whenever possible.

### 8.4 Avoid Unnecessary Side Effects

Do not use watchers to calculate values that can be expressed with computed properties.

For example, avoid manually maintaining a separate total using a watcher when `computed()` can derive it directly.

### 8.5 Clean Up External Resources

When using timers, event listeners, or subscriptions in effects, clean them up when the effect reruns or stops.

This prevents duplicate listeners, stale timers, and resource leaks.

### 8.6 Handle Asynchronous Work Carefully

When watchers trigger API calls, consider:

- Debouncing rapidly changing search inputs.
- Cancelling obsolete requests.
- Handling loading and error states.
- Preventing stale responses from replacing newer results.

### 8.7 Choose the Right Flush Timing

By default, watchers are scheduled by Vue. If a callback needs to access the updated DOM, use an appropriate flush timing, such as `flush: 'post'`.

```javascript
watch(
  searchTerm,
  () => {
    // Runs after Vue updates the component DOM.
    console.log('DOM update completed')
  },
  { flush: 'post' }
)
```

Use `flush: 'sync'` only when synchronous execution is genuinely required. It bypasses normal batching and can be less efficient for frequently changing data.

---

## 9. Common Mistakes

### Mistake 1: Forgetting .value in JavaScript

Incorrect:

```javascript
const count = ref(10)

console.log(count * 2)
```

Correct:

```javascript
console.log(count.value * 2)
```

Inside ordinary JavaScript code, a ref's value is accessed through `.value`. Vue automatically unwraps refs in normal template expressions.

### Mistake 2: Using computed() for API Calls

Avoid performing API requests inside computed getters.

Use a watcher when an API request needs to happen in response to a change, or use a dedicated data-fetching mechanism when appropriate.

### Mistake 3: Assuming watch() Runs Immediately

By default, a watcher runs when its source changes. Configure `{ immediate: true }` if its callback should also run during initialization.

### Mistake 4: Thinking watchEffect() Requires Explicit Sources

`watchEffect()` tracks reactive dependencies automatically.

```javascript
watchEffect(() => {
  console.log(userName.value)
})
```

There is no need to pass `userName` as a separate source.

### Mistake 5: Confusing Caching with Automatic Dependency Tracking

Both computed properties and `watchEffect()` track reactive dependencies automatically, but their purposes are different.

- `computed()` caches a derived result.
- `watchEffect()` reruns a side-effect callback when its tracked dependencies change.

---

## 10. Final Summary

- **`computed()`** is used to derive reactive values from existing state. It is cached until its dependencies change and is best for calculations, filtering, totals, and UI conditions.
- **`watch()`** is used to observe explicitly selected reactive sources and run a callback when they change. It is useful for API requests, persistence, and other controlled side effects.
- **`watchEffect()`** runs immediately and automatically tracks reactive values accessed during its synchronous execution. It is useful for synchronizing reactive state with external systems.

### Which One Should You Choose?

| Requirement | API to use |
|---|---|
| Calculate cart total | `computed()` |
| Filter products by search term | `computed()` |
| Calculate completed task count | `computed()` |
| Fetch product data when product ID changes | `watch()` |
| Save a setting when it changes | `watch()` |
| Automatically synchronize an effect with reactive values | `watchEffect()` |
| Update the browser title based on reactive data | `watchEffect()` |

**Remember:** Use `computed()` to calculate values, `watch()` to respond to specific changes, and `watchEffect()` when you want Vue to track the reactive dependencies of a side effect automatically.

# Vue.js Custom Composables

## 1. Introduction

Custom composables are an important feature of Vue 3 that allows developers to extract and reuse stateful logic across multiple components.

In real-world applications, different components often need similar functionality. For example, a product list and a product details page may both need to fetch data from an API, handle loading states, and manage errors.

Instead of writing the same logic separately in every component, Vue allows us to create a reusable function called a **custom composable**.

Custom composables are built using Vue's Composition API, including functions such as `ref()`, `computed()`, `watch()`, and lifecycle hooks.

## 2. Definition

A custom composable is a reusable JavaScript function that encapsulates reactive state and related logic so that it can be shared across multiple Vue components.

Custom composables typically follow the naming convention of starting with the word `use`, followed by a descriptive name.

For example:

- `useFetch()` — handles API requests.
- `useAuth()` — manages authentication logic.
- `useCart()` — manages shopping cart operations.
- `useLocalStorage()` — synchronizes reactive state with local storage.
- `usePagination()` — manages pagination.
- `useFormValidation()` — handles form validation.

A composable is an ordinary JavaScript function. The `use` prefix is a naming convention, not a special JavaScript keyword.

## 3. Why Do We Use Custom Composables?

Custom composables help organize applications by separating reusable logic from the user interface.

### 3.1 Code Reusability

The same logic can be used in different components without rewriting the implementation.

For example, multiple components can use the same `useFetch()` function to retrieve data from different API endpoints.

### 3.2 Avoid Code Duplication

Without composables, every component might implement its own API request, loading indicator, and error handling.

A composable allows us to write that functionality once and reuse it.

### 3.3 Separation of Concerns

Components should primarily handle presentation and user interactions, while composables can encapsulate reusable business logic and state management.

For example, a product component displays product information, while `useFetch()` handles retrieving the information.

### 3.4 Maintainability

If the API-fetching implementation changes, we can update the composable rather than modifying every component that uses it.

### 3.5 Testability

Reusable logic can be tested separately from the component's template and styling.

### 3.6 Reactive State Management

Custom composables can use Vue's reactive APIs to ensure that changes in state automatically update components using that state.

## 4. How Do Custom Composables Work?

The general workflow is:

1. Identify logic that needs to be reused across components.
2. Extract that logic into a JavaScript function.
3. Use Vue's Composition API to manage reactive state and behavior.
4. Return the values and functions that components need.
5. Import or call the composable from the required components.
6. Use the returned reactive values in the component templates.
7. Vue automatically updates the UI when the relevant reactive state changes.

For example, an API-fetching composable might return three reactive values:

- `data` — stores the response.
- `loading` — indicates whether the request is in progress.
- `error` — stores any error information.

Components can use these values to display API results, loading messages, or error messages.

## 5. Naming Conventions

Vue recommends naming composables using the `use` prefix.

The name should clearly describe the functionality provided by the composable.

| Composable | Responsibility |
|---|---|
| `useFetch()` | Fetch data from APIs |
| `useAuth()` | Manage authentication-related logic |
| `useCart()` | Manage shopping cart state |
| `useLocalStorage()` | Synchronize state with browser storage |
| `useMouse()` | Track mouse coordinates |
| `usePagination()` | Manage page navigation |
| `useFormValidation()` | Validate form inputs |
| `useDebounce()` | Manage debounced operations |

For example:

```javascript
function useFetch(url) {
  // Reusable API-fetching logic
}
```

The function name indicates that the function provides reusable fetching behavior.

## 6. Custom Composables vs. Normal Utility Functions

A normal utility function usually performs a standalone operation, whereas a composable commonly encapsulates reactive state and behavior using Vue's Composition API.

| Feature | Normal Utility Function | Custom Composable |
|---|---|---|
| Main purpose | Perform a reusable operation | Reuse stateful or reactive logic |
| Vue reactivity | Not required | Commonly uses Vue reactivity |
| Reactive state | Usually not managed | Can manage reactive state |
| Examples | `formatDate()`, `calculateTax()` | `useFetch()`, `useCart()` |
| UI updates | Not automatic by itself | Reactive values can update the UI |

A composable does not have to contain every Vue API. The defining characteristic is that it encapsulates reusable logic, commonly involving reactive state or Composition API behavior.

## 7. Real-Time Use Cases

### 7.1 E-Commerce Application

A product list and a product details component may both need API data. A `useFetch()` composable can handle requests, loading states, and errors for both.

### 7.2 Authentication System

An application may use `useAuth()` to encapsulate login state, the current user, logout behavior, and authentication-related operations.

Sensitive authentication operations must still be handled securely, with appropriate server-side validation.

### 7.3 Shopping Cart

A `useCart()` composable can manage cart items, quantities, total prices, and functions for adding or removing products.

If several components must use the same cart state, the composable must deliberately provide shared state rather than creating a separate cart for every invocation.

### 7.4 Form Validation

A `useFormValidation()` composable can reuse validation rules, error messages, and form-validation functions across registration, login, and checkout forms.

### 7.5 Pagination

A `usePagination()` composable can manage the current page, page size, total number of pages, and navigation functions.

### 7.6 Browser Storage

A `useLocalStorage()` composable can synchronize reactive values with `localStorage`, allowing selected preferences or other suitable data to persist across page reloads.

## 8. Example: Understanding useFetch()

Consider a product management application that retrieves product information from an API.

A composable might have the following structure:

```javascript
import { ref, watch } from 'vue'

function useFetch(url) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Watch the URL and perform the API request.

  return {
    data,
    loading,
    error
  }
}
```

This example illustrates the structure of a composable. A complete implementation must include the request, response handling, error handling, and any required cleanup.

### Explanation

**`data`**

Stores the information returned by the API.

**`loading`**

Indicates whether a request is in progress. A component can use this value to display a loading message.

**`error`**

Stores an error when the request fails.

**`return`**

Makes the reactive state available to the component that calls the composable.

## 9. How Components Use a Composable

A component calls the composable and uses its returned values.

For example:

```javascript
const {
  data,
  loading,
  error
} = useFetch('https://dummyjson.com/products')
```

The component can then display different content depending on the state:

- If `loading` is `true`, display a loading message.
- If `error` contains an error, display an error message.
- If `data` contains the response, display the products.

The composable handles the reusable logic, while the component controls how the results appear in the UI.

## 10. Stateful Logic and Shared State

One important concept is the difference between reusing logic and sharing the same state.

### 10.1 Reusing Logic

When two components call the same composable, they reuse its implementation.

However, if the composable creates its own `ref()` values during every invocation, each component normally receives separate reactive state.

For example, two calls to `useFetch()` can manage different API responses independently.

### 10.2 Sharing State

Sometimes multiple components need to access and update the same state.

For example, a navigation bar, product page, and checkout page may all need to access the same shopping cart.

In this situation, the composable must deliberately expose shared state, such as module-level reactive variables, or use a state-management solution such as Pinia.

A composable does not automatically share state simply because multiple components call the same function.

## 11. Best Practices

### 11.1 Use Meaningful Names

Prefer names such as `useFetch()`, `useCart()`, and `useAuth()` that clearly describe the composable's responsibility.

### 11.2 Keep Responsibilities Focused

A composable should ideally handle a clearly defined area of functionality. For example, API fetching and shopping cart management are usually separate responsibilities.

### 11.3 Return Only What Components Need

Expose the necessary reactive state and functions rather than making every internal implementation detail public.

### 11.4 Handle Errors Properly

API-related composables should account for failed requests, loading states, and unexpected responses.

### 11.5 Clean Up Resources

When composables create timers, event listeners, subscriptions, or other resources, they should clean them up when appropriate.

### 11.6 Understand State Ownership

Decide whether each invocation should own independent state or whether multiple components should share a common state.

### 11.7 Use Composables in the Appropriate Context

Composables that depend on a component's lifecycle or instance should generally be called synchronously from `setup()` or `<script setup>`, or from another composable invoked in that context.

### 11.8 Avoid Unnecessary Abstraction

Not every small calculation needs a composable. A normal utility function may be sufficient when the logic does not require reactive state or Composition API behavior.

## 12. Advantages and Limitations

### Advantages

- Encourages code reuse.
- Reduces duplicated implementation.
- Separates application logic from presentation.
- Supports reactive state management.
- Improves maintainability.
- Makes reusable behavior easier to test.
- Supports modular application architecture.

### Limitations and Considerations

- Poorly designed composables can combine too many unrelated responsibilities.
- State is not shared automatically between invocations.
- Reactive dependencies and asynchronous operations require careful management.
- Lifecycle-dependent behavior must be used in the appropriate Vue context.
- Excessive abstraction can make simple code harder to understand.


# Shallow Reactivity
## 1. Introduction

Shallow reactivity is an optimization technique in Vue 3 that allows developers to track changes only at the top level of an object or data structure, instead of making every nested property reactive.

Vue provides two important APIs for shallow reactivity:

- `shallowRef()`
- `shallowReactive()`

These APIs are particularly useful when working with large datasets, immutable data structures, external state-management libraries, and objects whose nested properties do not need individual reactive tracking.

For example, consider an application that displays 50,000 product records. If the application replaces the entire dataset whenever the data changes, making every nested property deeply reactive may introduce unnecessary overhead. Shallow reactivity can reduce that overhead.

## 2. What Is `shallowRef()`?

`shallowRef()` creates a reactive reference that tracks changes to its `.value` property without deeply converting the referenced object's nested properties into reactive objects.

Definition: `shallowRef()` is a Vue Composition API function that makes only the reference itself reactive, leaving the inner value as-is.

### Syntax

```
import { shallowRef } from 'vue'

const products = shallowRef([])
```

### How it works

- Vue tracks access to `products.value`.
- Replacing `products.value` triggers reactive updates.
- Mutating a nested property inside the array or object does not automatically trigger an update through the shallow reference.

Example:

```
import { shallowRef } from 'vue'

const user = shallowRef({
  name: 'Vaishu',
  address: {
    city: 'Chennai'
  }
})

// Replacing the entire value is reactive.
user.value = {
  name: 'Vaishu Kumar',
  address: {
    city: 'Coimbatore'
  }
}

// Nested mutation is not automatically reactive.
user.value.address.city = 'Madurai'
```

The first operation replaces the root value, so Vue can detect the change. The second operation modifies a nested property, which is not automatically reactive.

### When should we use `shallowRef()`?

Use it when:

- Working with large arrays or objects that are replaced as a whole.
- Receiving immutable data from APIs or state-management systems.
- Integrating with external libraries that manage their own state.
- Avoiding unnecessary deep reactive conversion.

## 3. What Is `shallowReactive()`?

`shallowReactive()` creates a reactive object whose root-level properties are reactive, but whose nested objects are not automatically converted into reactive objects.

Definition: `shallowReactive()` makes only the first level of an object reactive while leaving nested values unchanged.

### Syntax

```
import { shallowReactive } from 'vue'

const state = shallowReactive({
  count: 0,
  user: {
    name: 'Vaishu'
  }
})
```

### How it works

```
import { shallowReactive } from 'vue'

const state = shallowReactive({
  count: 0,
  user: {
    name: 'Vaishu'
  }
})

// Root-level change: reactive.
state.count = 10

// Nested change: not automatically reactive.
state.user.name = 'Vaishu Kumar'

// Replacing a root-level property: reactive.
state.user = {
  name: 'New User'
}
```

The root-level `count` and `user` properties are reactive. However, `state.user.name` is nested inside an ordinary, non-reactive object.

### When should we use `shallowReactive()`?

Use it when:

- Managing objects with a small number of root-level reactive properties.
- Keeping nested data structures unchanged.
- Working with state where only top-level property changes should trigger updates.

Avoid mixing shallow and deep reactive objects without a clear design, because doing so can make update behavior difficult to understand.

## 4. Difference Between `ref()`, `shallowRef()`, `reactive()`, and `shallowReactive()`

| API                 | Root-level changes               | Nested changes              |
| ------------------- | -------------------------------- | --------------------------- |
| `ref()`             | Reactive                         | Deeply reactive for objects |
| `shallowRef()`      | `.value` replacement is reactive | Not automatically reactive  |
| `reactive()`        | Reactive                         | Deeply reactive             |
| `shallowReactive()` | Root properties are reactive     | Not automatically reactive  |

### Practical selection

- Use `ref()` for ordinary reactive values and objects.
- Use `reactive()` for deeply reactive objects.
- Use `shallowRef()` when replacing an entire object or array is the main update mechanism.
- Use `shallowReactive()` when only root-level properties of an object need to be reactive.

## 5. How Shallow Reactivity Optimizes Performance

Suppose an analytics dashboard loads a dataset containing 100,000 records, each with several nested properties.

With deep reactivity, Vue converts nested objects into reactive proxies as they are accessed. For certain workloads, this adds overhead.

With shallow reactivity, the dataset remains non-reactive internally. Vue tracks only the top-level reference or root-level properties.

This can reduce reactive tracking overhead when:

- The dataset is large.
- Nested properties are not independently edited.
- Updates occur by replacing the entire dataset.
- The data comes from an immutable source.

Shallow reactivity does not automatically make every application faster. The benefit depends on the data size, access patterns, rendering strategy, and how updates are performed.

## 6. Important Considerations

### 6.1 Nested mutations do not automatically trigger updates

With `shallowRef()`, this does not automatically trigger dependent effects:

```
products.value[0].price = 500
```

Replacing the array does:

```
products.value = products.value.map(product =>
  product.id === 1
    ? { ...product, price: 500 }
    : product
)
```

The second approach creates a new array and assigns it to `.value`, triggering the shallow reference's reactive notification.

### 6.2 Shallow reactivity is not deep immutability

`shallowRef()` and `shallowReactive()` do not prevent developers from modifying nested objects. They simply do not automatically track those nested mutations.

Immutability is a programming practice; shallow reactivity is a reactivity strategy.

### 6.3 Use `triggerRef()` when necessary

If a nested object inside a `shallowRef()` changes and you deliberately need to notify dependent effects, Vue provides `triggerRef()`.

```
import { shallowRef, triggerRef } from 'vue'

const state = shallowRef({
  count: 0
})

state.value.count++

triggerRef(state)
```

This explicitly triggers effects that depend on the shallow reference. It should be used intentionally rather than as a substitute for a consistent update strategy.


# Vue 3 — Dynamic Components
## 1. Definition

Dynamic Components in Vue 3 allow an application to switch between different components dynamically at runtime using the built-in `<component>` element and its `:is` attribute.

Instead of writing separate components and manually controlling their visibility with `v-if` or `v-show`, Vue can render the component selected by a reactive variable.

Example:

```
<component :is="activeComponent"></component>
```

Here, `activeComponent` determines which Vue component is rendered.

## 2. Why Dynamic Components Are Used

Dynamic components are useful when an application needs to display different UI sections within the same page based on user actions or application state.

For example, an admin dashboard might contain:

- Overview — displays summary information.
- Analytics — displays reports and statistics.
- Settings — allows users to update preferences.

Instead of maintaining three separate sections and hiding two of them, dynamic components allow Vue to render the currently selected component.

Main purpose: To make UI composition flexible, reusable, and easier to maintain.

## 3. How Dynamic Components Work

The process follows these steps:

1. Create multiple Vue components.
2. Store the component definitions in a mapping object or use component references directly.
3. Maintain the selected component in a reactive variable.
4. Bind that variable to `<component :is="...">`.
5. When the selected component changes, Vue updates the rendered UI.

Example:

```
import { ref, computed } from "vue";

const activeTab = ref("Overview");

const componentMap = {
    Overview,
    Analytics,
    Settings
};

const activeComponent = computed(() => {
    return componentMap[activeTab.value];
});
```

```
<component :is="activeComponent" />
```

When `activeTab.value` changes to `"Analytics"`, Vue renders the Analytics component instead of Overview.

## 4. Syntax and Important Concepts

### 4.1 The `<component>` Element

`<component>` is a special Vue element that acts as a placeholder for a component chosen at runtime.

```
<component :is="selectedComponent" />
```

It does not represent a specific application component itself. Vue resolves which component to render based on the value of `selectedComponent`.

### 4.2 The `:is` Attribute

The `:is` attribute dynamically binds the component to render. It accepts a component definition, a component name in supported contexts, or a native HTML tag name.

Using a component reference:

```
<component :is="DashboardComponent" />
```

Using a reactive variable:

```
<component :is="activeComponent" />
```

Using a string for a registered component:

```
<component :is="'MyComponent'" />
```

For application code, using imported component references or a controlled mapping is generally more reliable than dynamically constructing component names.

### 4.3 Reactive Component Selection

Vue's `ref()` can store the currently selected component name or component definition.

```
import { ref } from "vue";

const activeComponent = ref(Overview);
```

To switch components:

```
activeComponent.value = Analytics;
```

When the component reference changes, Vue updates the rendered component.

### 4.4 Component Mapping

A mapping object associates user-facing names with component definitions.

```
const componentMap = {
    Overview,
    Analytics,
    Settings
};
```

This makes it easy to select components using a name stored in application state.

```
const selectedComponent = computed(
    () => componentMap[activeTab.value]
);
```

A controlled mapping also helps prevent invalid component selections.

## 5. Component Lifecycle and State

By default, when a dynamic component is replaced with a different component, the previous component instance is unmounted and the new component is mounted.

For example:

- Switching from Overview to Analytics unmounts Overview.
- Analytics is mounted and its setup logic runs.
- Switching back to Overview normally creates a new Overview instance.

Therefore, component-local state may be reset when returning to a previously displayed component.

### Using `<KeepAlive>`

Vue provides `<KeepAlive>` to cache inactive component instances.

```
<KeepAlive>
    <component :is="activeComponent" />
</KeepAlive>
```

With this wrapper, Vue preserves cached component instances when switching between them, including their local state.

Keep in mind that cached components are deactivated rather than unmounted. Vue provides lifecycle hooks such as `onActivated()` and `onDeactivated()` for handling this behavior.

## 6. Dynamic Components vs. Conditional Rendering

| Feature                    | Dynamic components                     | `v-if` / `v-show`                                            |
| -------------------------- | -------------------------------------- | ------------------------------------------------------------ |
| Main purpose               | Select which component to render       | Conditionally display elements                               |
| Typical use                | Tabs with separate components          | Conditional sections or elements                             |
| Component reuse            | Renders reusable component definitions | Can also be used with components                             |
| Default switching behavior | Replaces the active component instance | Depends on the directive and structure                       |
| State preservation         | Use `<KeepAlive>` when appropriate     | Depends on whether the component is removed or merely hidden |

Dynamic components are not automatically better than conditional rendering. They are particularly useful when each UI section has its own component implementation and you want a single rendering location.

## 7. Dynamic Components vs. Vue Router

These concepts solve different problems.

Dynamic components are appropriate when the user switches between UI panels within the same route.

Example: switching between Overview, Analytics, and Settings tabs.

Vue Router is appropriate when navigation should correspond to different URLs and browser history.

Example:

- `/dashboard`
- `/analytics`
- `/settings`

A Vue Router view can itself render different components dynamically based on the current route.

## 8. Advantages

1. Flexible UI: Change the displayed component according to application state.
2. Reusability: Keep separate UI sections in independent components.
3. Maintainability: Each component can own its template and behavior.
4. Cleaner templates: One dynamic component location can replace many conditional component branches.
5. State caching: `<KeepAlive>` can preserve inactive component state.
6. Suitable for modular interfaces: Useful for dashboards, tabbed panels, multi-step workflows, and configurable widgets.

## 9. Limitations and Considerations

1. By default, switching components can destroy the previous component's local state.
2. `<KeepAlive>` consumes memory because inactive component instances remain cached.
3. Dynamic component names should be resolved from a controlled mapping rather than arbitrary user input.
4. Dynamic components do not automatically provide URL routing, browser history, or route-level navigation.
5. Frequent component switching may cause mounting and unmounting work when instances are not cached.

## 10. Real-World Applications

| Application               | Dynamic component use                                               |
| ------------------------- | ------------------------------------------------------------------- |
| Admin dashboard           | Switch between Overview, Analytics, and Settings                    |
| Checkout system           | Display card, wallet, or bank payment forms                         |
| Multi-step form           | Render the current step's component                                 |
| Content management system | Switch between text, image, and video editors                       |
| Reporting platform        | Switch between charts, tables, and report panels                    |
| Product customization     | Render different configuration panels based on the selected product |

# Vue 3 — KeepAlive Documentation

## 1. Definition

`<KeepAlive>` is a built-in Vue 3 component that caches inactive component instances instead of destroying them when switching between components.

Normally, when a dynamic component is replaced by another component, Vue unmounts the previous component. When that component is rendered again, a new instance is created and its local state is initialized again.

`<KeepAlive>` prevents this repeated destruction and recreation by keeping component instances in a cache.

It is especially useful when you want to preserve:

- User input entered into forms.
- Search filters and pagination.
- Component-local state.
- Scroll position managed by a component.
- Expensive component initialization results.

## 2. Why KeepAlive Is Used

Consider an admin dashboard with three views:

- Profile: A user enters their personal information.
- Analytics: A user checks reports.
- Settings: A user changes preferences.

Without `<KeepAlive>`, switching away from Profile and then returning may reset its component-local form data.

With `<KeepAlive>`, Vue can reuse the cached Profile instance, so the user can continue from where they left off.

Main purpose: Preserve component instances and their local state when switching between views.

## 3. How KeepAlive Works

Profile component

User enters information

Switch to Analytics

Profile is deactivated and cached

Return to Profile

Vue reactivates the cached instance

The process is:

1. Vue renders the active component.
2. The user enters data or interacts with it.
3. The user switches to another component.
4. Vue deactivates the previous component and keeps its instance in the cache.
5. When the user returns, Vue reactivates the cached instance instead of creating a new one.

## 4. Basic Syntax

```
<KeepAlive>
    <component :is="activeComponent" />
</KeepAlive>
```

Here:

- `<KeepAlive>` is the built-in caching component.
- `<component>` is the dynamic component placeholder.
- `:is="activeComponent"` determines which component Vue renders.

`<KeepAlive>` works with component instances, not arbitrary HTML elements.

## 5. Important Concepts

### 5.1 Component caching

Vue stores eligible inactive component instances in a cache.

```
<KeepAlive>
    <component :is="activeComponent" />
</KeepAlive>
```

When the active component changes, the previous component can be reused later without being fully unmounted.

### 5.2 Include specific components

Use `include` to cache only components whose names match the specified names.

```
<KeepAlive include="Profile,Analytics">
    <component :is="activeComponent" />
</KeepAlive>
```

This example allows the named `Profile` and `Analytics` components to be cached. The components must have matching component names.

### 5.3 Exclude specific components

Use `exclude` to prevent selected components from being cached.

```
<KeepAlive exclude="Settings">
    <component :is="activeComponent" />
</KeepAlive>
```

Here, `Settings` is excluded from the cache.

### 5.4 Limit the number of cached instances

Use `max` to limit the number of component instances kept in the cache.

```
<KeepAlive :max="5">
    <component :is="activeComponent" />
</KeepAlive>
```

Vue uses a least-recently-used (LRU) strategy when the cache reaches its limit. An older cached instance may be pruned when a new one needs to be cached.

## 6. Lifecycle Hooks

Cached components have a different lifecycle from components that are completely unmounted.

| Lifecycle hook    | Purpose                                                                         |
| ----------------- | ------------------------------------------------------------------------------- |
| `onMounted()`     | Runs when the component is first mounted                                        |
| `onActivated()`   | Runs when the cached component becomes active, including its initial activation |
| `onDeactivated()` | Runs when the component becomes inactive but remains cached                     |
| `onUnmounted()`   | Runs when the component is actually unmounted and destroyed                     |

Example:

```
<script setup>
import {
    onMounted,
    onActivated,
    onDeactivated,
    onUnmounted
} from "vue";

onMounted(() => {
    console.log("Component mounted");
});

onActivated(() => {
    console.log("Component activated");
});

onDeactivated(() => {
    console.log("Component deactivated");
});

onUnmounted(() => {
    console.log("Component unmounted");
});
</script>
```

Important: `onActivated()` and `onDeactivated()` are useful for managing resources when a cached view becomes visible or hidden. For example, pause a timer when a view is deactivated and resume it when the view becomes active.

## 7. KeepAlive vs. Normal Dynamic Components

| Behavior                     | Without KeepAlive      | With KeepAlive                                                   |
| ---------------------------- | ---------------------- | ---------------------------------------------------------------- |
| Switch away from component   | Normally unmounts it   | Deactivates and caches it                                        |
| Return to previous component | Creates a new instance | Reuses the cached instance                                       |
| Local form state             | May reset              | Preserved while cached                                           |
| Component initialization     | Runs again on remount  | Does not rerun merely because the cached instance is reactivated |
| Memory usage                 | Generally lower        | Higher because instances are retained                            |
| Lifecycle                    | Mount/unmount          | Mount/activate/deactivate                                        |

## 8. Limitations and Considerations

1. Memory usage: Caching too many large components can consume significant memory.
2. Not permanent storage: Cached state can disappear if the instance is evicted from the cache or the application is refreshed.
3. External data can change: A cached component may need to refresh its data when activated again.
4. Background resources: Timers, subscriptions, and polling may continue unless explicitly paused.
5. Component naming matters: `include` and `exclude` depend on component names.
6. Scroll position is not automatically guaranteed: Component state can be preserved, but document or container scroll restoration may require separate handling.

## 9. Real-World Applications

- Multi-step registration forms where users move between steps.
- Admin dashboards where filters should remain intact.
- Analytics views with expensive initialization.
- Tabbed interfaces where users expect their input to remain.
- Search pages where filters and pagination should survive switching views.

# Vue 3 Teleport 
## 1. Theory

In Vue 3, `<Teleport>` is a built-in component that allows you to render a component's template content at a different location in the DOM tree from where it is declared.

Normally, Vue renders a component's HTML inside its parent element. However, certain UI elements, such as modal dialogs, tooltips, dropdown overlays, and toast notifications, often need to appear outside their original container.

`<Teleport>` solves this problem by separating the logical component structure from the physical DOM structure.

For example, in a support ticket management application, the ticket details modal logically belongs to the ticket dashboard. However, rendering the modal directly inside the dashboard's HTML structure can introduce CSS issues involving `overflow`, stacking contexts, and `z-index`.

Using `<Teleport to="body">` allows Vue to render the modal inside the document's `<body>` element while maintaining its connection to the Vue application.

## 2. Definition

Teleport is a built-in Vue 3 component that renders its children into a specified DOM target outside their original DOM location while preserving their logical position within the Vue component hierarchy.

Basic syntax:

```
<Teleport to="body">
  <div class="modal">
    This modal is rendered inside document.body.
  </div>
</Teleport>
```

Here:

- `<Teleport>` is the built-in Vue component.
- `to="body"` specifies the destination DOM element.
- The `<div>` is rendered at the target location instead of its original location in the DOM.

## 3. Why is Teleport used?

Teleport is primarily used when an interface element must visually appear independently of its parent container.

Common problems without Teleport include:

- A modal being clipped by a parent element with `overflow: hidden`.
- A popup appearing behind another element because of CSS stacking contexts.
- A notification being constrained by the layout of its parent container.
- Overlay components becoming difficult to position consistently across different pages.

Teleport allows developers to render these elements near the document root, making their positioning and layering easier to manage.

### Real-world applications

| Application             | Use of Teleport                                      |
| ----------------------- | ---------------------------------------------------- |
| E-commerce application  | Display a cart confirmation or payment modal.        |
| Admin dashboard         | Display user deletion confirmations.                 |
| Customer support system | Display ticket details and confirmation dialogs.     |
| Notification system     | Display success and error messages globally.         |
| SaaS application        | Display global loading overlays and alerts.          |
| Form application        | Display validation summaries or confirmation popups. |

## 4. How Teleport works

Consider a support dashboard containing a list of customer tickets.

When the user clicks a ticket, the application needs to display its details in a modal.

Without Teleport, the modal is rendered inside the dashboard's DOM container. With Teleport, the modal can be rendered inside `document.body`.

### Logical component structure

Vue application (`#app`)

Ticket Dashboard

Ticket table and controls

`<Teleport to="body">`

Ticket modal declared here

Teleport moves the rendered DOM content

### Physical DOM structure

`document.body`

`<div id="app">`

Dashboard content

`<div class="modal">`

Ticket details rendered outside `#app`

The process is:

1. The user triggers an action, such as clicking a ticket.
2. Vue updates reactive state.
3. Vue renders the modal conditionally.
4. Teleport places the modal's DOM inside the specified target.
5. Reactive updates and event handling continue to work through Vue's component system.

## 5. Syntax and important attributes

### Basic syntax

```
<Teleport to="#modal-root">
  <div class="modal">
    Modal content
  </div>
</Teleport>
```

The `to` prop accepts a CSS selector or a DOM element reference.

Examples:

```
<!-- Render inside body -->
<Teleport to="body">
  <div>Notification</div>
</Teleport>

<!-- Render inside a dedicated element -->
<Teleport to="#modal-root">
  <div>Modal content</div>
</Teleport>

<!-- Render inside a notification container -->
<Teleport to="#notification-root">
  <div>Success message</div>
</Teleport>
```

For selector-based targets, the target element must exist when Vue resolves it.

### Important Teleport props

| Prop       | Purpose                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `to`       | Specifies the destination DOM target.                                                                                              |
| `disabled` | Disables teleportation and keeps content at its original DOM location.                                                             |
| `defer`    | Defers resolving the target until later in the same render cycle, useful when the target is rendered later in the same Vue update. |

Example using `disabled`:

```
<Teleport to="body" :disabled="isTeleportDisabled">
  <div class="modal">
    Modal content
  </div>
</Teleport>
```

```
import { ref } from "vue";

const isTeleportDisabled = ref(false);
```

- When `isTeleportDisabled` is `false`, the content renders at the target.
- When `isTeleportDisabled` is `true`, the content remains at its original location.

The `defer` prop is useful for targets that become available later in the same render cycle. It does not wait indefinitely for a target that may appear at an arbitrary future time.

## 6. Important concepts

### 6.1 Conditional rendering with `v-if`

Teleport is frequently combined with `v-if` to show or hide overlays.

```
<Teleport to="body">
  <div v-if="showModal" class="modal">
    Ticket details
  </div>
</Teleport>
```

When `showModal` is `true`, Vue renders the modal. When it becomes `false`, Vue removes the modal from the DOM.

### 6.2 Reactive state

Reactive state controls whether the teleported content appears.

```
import { ref } from "vue";

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
```

The component does not need to manipulate `document.body` manually. Vue and Teleport manage the rendering.

### 6.3 Component communication

Teleport does not break Vue's normal component communication mechanisms.

A teleported component can still:

- Receive props from its parent.
- Emit events to its parent.
- Access reactive state provided through Vue's component hierarchy.
- Use Vue lifecycle hooks normally.

The physical DOM location does not change the logical component hierarchy.

### 6.4 CSS positioning

Teleport is commonly paired with CSS such as:

```
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgb(0 0 0 / 60%);
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Teleport does not automatically provide modal styling, keyboard accessibility, focus management, or correct `z-index` values. Those responsibilities remain with the developer.

## 7. Practical example: Modal using Teleport

The following example demonstrates the essential implementation.

```
<template>
  <div>
    <h2>Support Dashboard</h2>

    <button @click="showModal = true">
      View Ticket
    </button>

    <Teleport to="body">
      <div v-if="showModal" class="backdrop">
        <div class="modal">
          <h3>Ticket Details</h3>
          <p>Customer cannot log in to the application.</p>

          <button @click="showModal = false">
            Close
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  color: #222;
  padding: 25px;
  border-radius: 10px;
  max-width: 400px;
}
</style>
```

This is a Vue Single-File Component example intended for a Vue project with a build setup. It is not a standalone HTML file.

Notice that `style scoped` scopes styles to elements Vue associates with the component. Teleport does not remove the component's scope attributes, but global styles may be more appropriate for shared overlay styling.

## 8. Teleport versus normal rendering

| Feature                 | Normal rendering                     | Teleport                                               |
| ----------------------- | ------------------------------------ | ------------------------------------------------------ |
| DOM location            | Original parent container            | Specified target                                       |
| Vue component ownership | Preserved                            | Preserved                                              |
| Reactive state          | Supported                            | Supported                                              |
| Props and events        | Supported                            | Supported                                              |
| CSS positioning         | Depends on original layout           | Can escape the original container's layout constraints |
| Typical usage           | Page content and ordinary components | Modals, overlays, notifications and tooltips           |

## 9. Advantages and disadvantages

### Advantages

1. Avoids some layout constraints: Teleported content can escape clipping caused by an ancestor's `overflow` setting.
2. Simplifies overlay positioning: Rendering near `body` can make fixed-position overlays easier to manage.
3. Preserves Vue's component model: Props, events, reactive state, and logical component ownership remain intact.
4. Supports reusable UI patterns: Modal and notification components can be reused across multiple pages.
5. Improves layout separation: Overlay markup does not need to be physically nested in the element where the interaction originates.

### Disadvantages and limitations

1. The destination DOM target must be available when Vue resolves it.
2. Teleport does not automatically solve every stacking-context or CSS positioning issue.
3. Modals still need appropriate keyboard interaction, focus management, and accessibility support.
4. Server-side rendering requires consideration of how teleported content is handled.
5. Developers need to understand that the physical DOM structure differs from the Vue component structure.

# Vue 3 Suspense
## 1. Theory

Vue 3 provides the built-in `<Suspense>` component to coordinate the rendering of components that depend on asynchronous operations during their initial setup.

In a typical application, a component may need to fetch data from an API, load another component dynamically, or wait for an asynchronous setup operation before its content is ready. During this time, showing a blank page can create a poor user experience.

`<Suspense>` allows developers to define fallback content that Vue can display while supported asynchronous dependencies are pending. Once those dependencies resolve, Vue displays the actual content.

For example, in an e-commerce application, the product details component may need to retrieve product information before displaying the product page. A loading indicator can be shown while the component's asynchronous setup is pending.

Important: Vue's `<Suspense>` is currently documented as an experimental feature. Check the official documentation for version-specific behavior before relying on it in production.

## 2. Definition

`<Suspense>` is a built-in Vue component that coordinates asynchronous dependencies in its default slot and displays fallback content while those dependencies remain unresolved.

It has two primary slots:

- Default slot: Contains the actual component or content to display when its supported asynchronous dependencies resolve.
- Fallback slot: Contains temporary content, such as a loading indicator or message, shown while those dependencies are pending.

## 3. Why is Suspense used?

Suspense is useful when an application contains components that cannot display their final content immediately.

Its purposes include:

1. Providing feedback while asynchronous component setup is pending.
2. Coordinating multiple supported asynchronous dependencies within a component tree.
3. Avoiding an initially empty content area while the dependencies are unresolved.
4. Keeping loading UI separate from the main component's content.
5. Improving the organization of asynchronous component rendering.

For example, a reporting dashboard may contain a component that waits for a report API request. Suspense can display a loading interface until the component's asynchronous setup completes.

## 4. How Suspense works

The rendering process follows these steps:

1. Vue encounters a `<Suspense>` boundary.
2. Vue begins rendering the default slot.
3. If a supported asynchronous dependency is pending, Vue displays the fallback slot.
4. Vue waits for the dependencies tracked by that boundary to resolve.
5. Once the dependencies resolve, Vue displays the resolved default content.

This behavior is useful for coordinating asynchronous component setup, but it does not automatically track every promise created in the application.

## 5. Syntax

```
<Suspense>
  <template #default>
    <AsyncDashboard />
  </template>

  <template #fallback>
    <p>Loading dashboard...</p>
  </template>
</Suspense>
```

### Explanation

- `<Suspense>` creates the asynchronous rendering boundary.
- `#default` defines the content to display after the tracked dependencies resolve.
- `#fallback` defines the temporary loading interface.
- `AsyncDashboard` must contain or represent a supported asynchronous dependency for the fallback behavior to apply.

## 6. Important concepts

### 6.1 Default slot

The default slot contains the actual content.

```
<Suspense>
  <template #default>
    <UserProfile />
  </template>

  <template #fallback>
    <p>Loading profile...</p>
  </template>
</Suspense>
```

If `UserProfile` uses asynchronous setup, Suspense can coordinate its initial rendering.

### 6.2 Fallback slot

The fallback slot contains the temporary interface.

```
<template #fallback>
  <div class="loading">
    <p>Loading user data...</p>
  </div>
</template>
```

The fallback can contain text, components, a spinner, or a skeleton layout.

### 6.3 Async setup

A component can use `async setup()` or top-level `await` inside `<script setup>` to expose asynchronous setup to Suspense.

```
<script setup>
const response = await fetch("/api/products");
const products = await response.json();
</script>

<template>
  <div v-for="product in products" :key="product.id">
    {{ product.name }}
  </div>
</template>
```

When this component is rendered inside a Suspense boundary, Vue can wait for its asynchronous setup to resolve before displaying the default content.

### 6.4 Asynchronous components

Vue's `defineAsyncComponent()` allows a component to be loaded on demand.

```
import { defineAsyncComponent } from "vue";

const ReportsDashboard = defineAsyncComponent(
  () => import("./ReportsDashboard.vue")
);
```

An async component can participate in Suspense-based rendering. However, async components also support their own loading and error configuration, so Suspense is not mandatory for every async component.

### 6.5 Reactive data and API requests

Suspense does not automatically wait for every API request.

For example:

```
import { onMounted, ref } from "vue";

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch("/api/products");
    products.value = await response.json();
  } finally {
    loading.value = false;
  }
});
```

This code manages loading explicitly. Because the request runs inside `onMounted()`, the request does not automatically become a Suspense dependency.

Use manual loading state when it provides the simplest solution for the API workflow.

## 7. Suspense versus manual loading state

| Feature                    | Suspense                                                 | Manual loading state                                   |
| -------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| Main purpose               | Coordinate supported asynchronous component dependencies | Manage loading for explicit operations                 |
| Loading UI                 | Defined through the fallback slot                        | Defined using reactive state and conditional rendering |
| Async setup                | Supported                                                | Can also be managed explicitly                         |
| `onMounted()` API requests | Not automatically tracked                                | Works directly                                         |
| Error handling             | Requires separate consideration                          | Can be implemented with explicit error state           |
| Best use                   | Asynchronous component trees                             | Individual requests and user-triggered operations      |

## 8. Advantages

- Provides a declarative way to define fallback content.
- Helps coordinate multiple supported asynchronous dependencies.
- Keeps loading UI separate from the resolved component content.
- Works with asynchronous component setup.
- Helps create more organized loading experiences in complex Vue applications.

## 9. Limitations

- Suspense is experimental in Vue 3.
- It does not automatically track arbitrary asynchronous operations.
- It does not replace error handling for failed requests.
- Its fallback behavior depends on the asynchronous dependencies and the boundary's state.
- For a single API request, manually managing a `loading` ref may be simpler.

## 10. Real-world use cases

| Use case            | Example                                                           |
| ------------------- | ----------------------------------------------------------------- |
| E-commerce          | Load product information before displaying product details.       |
| Analytics dashboard | Wait for asynchronous chart component setup.                      |
| User profile        | Load profile information during asynchronous setup.               |
| Admin application   | Load a complex settings component on demand.                      |
| Large application   | Coordinate several async components behind one loading interface. |
