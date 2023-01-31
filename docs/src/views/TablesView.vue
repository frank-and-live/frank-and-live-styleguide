<template>
  <div class="border border fl-border-grey-500 fl-bg-grey-300 p-5">
    <div class="border fl-border-grey-500 fl-bg-white px-4">
      <table class="fl-table fl-table-hover">
        <thead>
          <tr>
            <th>
              <input class="fl-check-input fl-check-input-sm" type="checkbox">
            </th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th class="text-end">Header</th>
          </tr>
        </thead>
        <tbody class="fl-table-group-divider">
          <tr>
            <td class="py-0">
              <input class="fl-check-input fl-check-input-sm" type="checkbox">
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>Label</td>
            <td>Label</td>
            <td class="text-end">Label</td>
          </tr>
          <tr class="fl-table-active">
            <td>
              <input class="fl-check-input fl-check-input-sm" type="checkbox" checked>
            </td>
            <td>My row contains fl-table-active</td>
            <td>Label</td>
            <td>Label</td>
            <td>Label</td>
            <td class="text-end">Label</td>
          </tr>
          <tr>
            <td class="py-0">
              <input class="fl-check-input fl-check-input-sm" type="checkbox">
            </td>
            <td class="text-center">I am centered</td>
            <td>Label</td>
            <td class="fl-table-active">I contain fl-table-active</td>
            <td>Label</td>
            <td class="text-end">Label</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="border fl-border-grey-500 fl-bg-white px-4 mt-5">
      <table class="fl-table fl-table-hover">
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
        <tbody class="fl-table-group-divider">
          <tr>
            <td colspan="6">
              <span class="fl-fs-p-s fl-fg-grey-500">This table is empty</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="border fl-border-grey-500 fl-bg-white px-4 mt-5">
      <table class="fl-table fl-table-hover">
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
        <tbody class="fl-table-group-divider">
          <tr>
            <td colspan="6">
              <span class="fl-fs-p-s fl-fg-blue-500">Items are loading...</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
