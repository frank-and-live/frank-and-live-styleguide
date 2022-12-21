<template>
  <h5 class="mb-3">How to implement the styleguide in your code?</h5>
  <p>
    Import the the styleguide like this into your page in <code>moneyflow-core</code>. Typically <code>base.html</code>
  </p>
  <pre class="mf-fs-p-s"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{% static 'moneyflow-style-guide-v2/dist/mf.css' %}&quot;&gt;
  </code></pre>
  <h5 class="mt-5 mb-3">How to obtain code for an element?</h5>
  <p>
    Simply inspect the desired element and copy the code.<br />
    If that does not work - contact your nearest front-end developer.
  </p>
  <h5 class="mt-5 mb-3">Naming of CSS classes</h5>
  <p>
    Some classes in the style guide are prefixed with <code>-mf</code>. These classes are specific to Moneyflow. Eg. color utillity class <code>-mf-color-grey-500</code> is a color specific to the Moneyflow color palette.
  </p>
  <p>
    Other classes are not prefixed and are standard Bootstrap classes.
    Commonly used are:
  </p>
  <ul class="mf-fs-p">
    <li>
      <a href="https://getbootstrap.com/docs/5.2/layout/grid/" target="_blank">grid system</a>
      (<code>container, row, col...</code>)
    </li>
    <li>
      <a href="https://getbootstrap.com/docs/5.2/utilities/flex/" target="_blank">flexbox</a>
      (<code>d-flex, align-items-center...</code>)
    </li>
    <li>
      <a href="https://getbootstrap.com/docs/5.2/utilities/spacing/" target="_blank">spacing</a>
      (<code>p-5, mx-3...</code>)
    </li>
  </ul>
  <p>
    All bootstrap classes maintain their original names, and <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank">documentation can be found here</a>.
  </p>

</template>
