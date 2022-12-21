<template>
  <div class="border border mf-border-grey-500 mf-bg-grey-300 p-5">
    <div class="border mf-border-grey-500 mf-bg-white px-4">
      <table class="mf-table mf-table-hover">
        <thead>
          <tr>
            <th>
              <input class="mf-check-input mf-check-input-sm" type="checkbox">
            </th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th class="text-end">Header</th>
          </tr>
        </thead>
        <tbody class="mf-table-group-divider">
          <tr>
            <td class="py-0">
              <input class="mf-check-input mf-check-input-sm" type="checkbox">
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>Label</td>
            <td>Label</td>
            <td class="text-end">Label</td>
          </tr>
          <tr class="mf-table-active">
            <td>
              <input class="mf-check-input mf-check-input-sm" type="checkbox" checked>
            </td>
            <td>My row contains mf-table-active</td>
            <td>Label</td>
            <td>Label</td>
            <td>Label</td>
            <td class="text-end">Label</td>
          </tr>
          <tr>
            <td class="py-0">
              <input class="mf-check-input mf-check-input-sm" type="checkbox">
            </td>
            <td class="text-center">I am centered</td>
            <td>Label</td>
            <td class="mf-table-active">I contain mf-table-active</td>
            <td>Label</td>
            <td class="text-end">Label</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="border mf-border-grey-500 mf-bg-white px-4 mt-5">
      <table class="mf-table mf-table-hover">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th class="text-end">Header</th>
          </tr>
        </thead>
        <tbody class="mf-table-group-divider">
          <tr>
            <td colspan="6">
              <span class="mf-fs-p-s mf-fg-grey-500">This table is empty</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="border mf-border-grey-500 mf-bg-white px-4 mt-5">
      <table class="mf-table mf-table-hover">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th class="text-end">Header</th>
          </tr>
        </thead>
        <tbody class="mf-table-group-divider">
          <tr>
            <td colspan="6">
              <span class="mf-fs-p-s mf-fg-money-blue-500">Items are loading...</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
