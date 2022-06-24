<script lang="ts">
  import { t } from "svelte-i18n";

  export let paginationData: { pageNumber: number; pageCount: number };
  export let actions: {
    increment: () => void;
    decrement: () => void;
    changePage: (index: number) => void;
  };
</script>

<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li on:click={actions.decrement}>
      <span
        class="cursor-pointer py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        {$t("common.previous")}
      </span>
    </li>
    {#each Array(paginationData.pageCount || 1) as _, i}
      <li on:click={() => actions.changePage(i + 1)}>
        <span
          aria-current={paginationData.pageNumber === i + 1 ? "page" : null}
          class={"cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" +
            (paginationData.pageNumber === i + 1
              ? " bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
              : "")}
        >
          {i + 1}
        </span>
      </li>
    {/each}
    <li on:click={actions.increment}>
      <span
        class=" cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        {$t("common.next")}
      </span>
    </li>
  </ul>
</nav>
