<script lang="ts">
  import { superForm } from "sveltekit-superforms";
  import { valibotClient } from "sveltekit-superforms/adapters";
  import { userSchema } from "$lib/schema";

  export let data;

  const { form, errors, enhance, constraints, submitting, delayed } = superForm(
    data.form,
    {
      validators: valibotClient(userSchema),
      validationMethod: "oninput",
      scrollToError: "smooth",
      resetForm: true,
      onUpdated({ form }) {
        if (form.valid) {
          alert("Form submitted successfully!");
        }
      },
    },
  );
</script>

<main>
  <h1>Register</h1>

  <form method="POST" use:enhance novalidate>
    <!-- Name -->
    <div class="field">
      <label for="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        bind:value={$form.name}
        aria-invalid={$errors.name ? "true" : undefined}
        {...$constraints.name}
      />
      {#if $errors.name}
        <span class="error">{$errors.name}</span>
      {/if}
    </div>

    <!-- Email -->
    <div class="field">
      <label for="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        bind:value={$form.email}
        aria-invalid={$errors.email ? "true" : undefined}
        {...$constraints.email}
      />
      {#if $errors.email}
        <span class="error">{$errors.email}</span>
      {/if}
    </div>

    <!-- Age -->
    <div class="field">
      <label for="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        bind:value={$form.age}
        aria-invalid={$errors.age ? "true" : undefined}
        {...$constraints.age}
      />
      {#if $errors.age}
        <span class="error">{$errors.age}</span>
      {/if}
    </div>

    <!-- Password -->
    <div class="field">
      <label for="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        bind:value={$form.password}
        aria-invalid={$errors.password ? "true" : undefined}
        {...$constraints.password}
      />
      {#if $errors.password}
        <span class="error">{$errors.password}</span>
      {/if}
    </div>

    <!-- Confirm Password -->
    <div class="field">
      <label for="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        bind:value={$form.confirmPassword}
        aria-invalid={$errors.confirmPassword ? "true" : undefined}
      />
      {#if $errors.confirmPassword}
        <span class="error">{$errors.confirmPassword}</span>
      {/if}
    </div>

    <button type="submit" disabled={$submitting}>
      {$delayed ? "Submitting…" : "Submit"}
    </button>
  </form>
</main>

<style>
  main {
    max-width: 480px;
    margin: 3rem auto;
    font-family: sans-serif;
    padding: 0 1rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 1.25rem;
  }

  label {
    font-weight: 600;
    font-size: 0.9rem;
  }

  input {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }

  input[aria-invalid="true"] {
    border-color: crimson;
  }

  .error {
    color: crimson;
    font-size: 0.82rem;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.6rem 1.5rem;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
