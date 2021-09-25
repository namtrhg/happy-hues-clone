<script lang="ts">
  let palettes = [
    {
      background: "#fef6e4",
      color1: "#f3d2c1",
      color2: "#f3d2c1",
      color3: "#f582ae",
      color4: "#8bd3dd",
      color5: "#fef6e4",
    },
    {
      background: "#55423d",
      color1: "#271c19",
      color2: "#fff3ec",
      color3: "#9656a1",
      color4: "#ffc0ad",
      color5: "#e78fb3",
    },
    {
      background: "#faeee7",
      color1: "#fffffe",
      color2: "#fffffe",
      color3: "#c3f0ca",
      color4: "#ffc6c7",
      color5: "#ff8ea7",
    },
    {
      background: "#fffffe",
      color1: "#e3f6f5",
      color2: "#fffffe",
      color3: "#bae8e8",
      color4: "#e3f6f5",
      color5: "#ffd803",
    },
    {
      background: "#0f0e17",
      color1: "#fffffe",
      color2: "#fffffe",
      color3: "#e53170",
      color4: "#f25f4c",
      color5: "#ff8906",
    },
    {
      background: "#232946",
      color1: "#d4d8f0",
      color2: "#b8c1ec",
      color3: "#eebbc3",
      color4: "#fffffe",
      color5: "#eebbc3",
    },
    {
      background: "#f9f4ef",
      color1: "#fffffe",
      color2: "#fffffe",
      color3: "#f25042",
      color4: "#eaddcf",
      color5: "#8c7851",
    },
    {
      background: "#004643",
      color1: "#abd1c6",
      color2: "#e8e4e6",
      color3: "#e16162",
      color4: "#abd1c6",
      color5: "#f9bc60",
    },
    {
      background: "#eff0f3",
      color1: "#fffffe",
      color2: "#eff0f3",
      color3: "#d9376e",
      color4: "#fffffe",
      color5: "#ff8c3e",
    },
    {
      background: "#f8f5f2",
      color1: "#fffffe",
      color2: "#fffffe",
      color3: "#f8f5f2",
      color4: "#f45d48",
      color5: "#078080",
    },
    {
      background: "#fec7d7",
      color1: "#fffffe",
      color2: "#f9f8fc",
      color3: "#a786df",
      color4: "#d9d4e7",
      color5: "#fec7d7",
    },
    {
      background: "#fffffe",
      color1: "#fffffe",
      color2: "#fffffe",
      color3: "#e45858",
      color4: "#d1d1e9",
      color5: "#6246ea",
    },
    {
      background: "#f2f7f5",
      color1: "#00473e",
      color2: "#f2f7f5",
      color3: "#fa5246",
      color4: "#ffa8ba",
      color5: "#faae2b",
    },
    {
      background: "#16161a",
      color1: "#242629",
      color2: "#fffffe",
      color3: "#2cb67d",
      color4: "#72757e",
      color5: "#7f5af0",
    },
    {
      background: "#ffffe",
      color1: "#d8eefe",
      color2: "#fffffe",
      color3: "#ef4565",
      color4: "#90b4ce",
      color5: "#3da9fc",
    },
    {
      background: "#ffffe",
      color1: "#f2f4f6",
      color2: "#fffffe",
      color3: "#fde24f",
      color4: "#ff5470",
      color5: "#00ebc7",
    },
    {
      background: "#ffffe",
      color1: "#f6efef",
      color2: "#f2eef5",
      color3: "#fbdd74",
      color4: "#994ff3",
      color5: "#4fc4cf",
    },
  ];
</script>

<div
  style="display: block; opacity: 1;"
  class="w-[13rem] z-[999999] border-r-[3px] border-solid border-purple-900"
>
  <div class="fixed flex overflow-scroll w-[13rem] h-screen flex-col">
    <div>
      {#each palettes as { color1, color2, color3, color4, color5, background }, index}
        <a
          href="/palettes/17"
          class="w-full cursor-pointer py-2 px-6 max-w-full inline-block hover:bg-purple-800"
          ><div
            style={`border-color: rgb(0, 24, 88); opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; background-color: ${background};`}
            class="w-full flex justify-start rounded bg-white cursor-pointer py-[0.8rem] px-[1rem] border-[3px] border-solid border-[#000]"
          >
            <div
              class="flex flex-row-reverse overflow-hidden w-full mr-auto ml-auto justify-center rounded-none"
            >
              <div
                style={`background-color:${color1}`}
                class="w-[30px] h-[30px] -mx-7px border-solid border-gray-900 border-[3px] rounded-full"
              />
              <div
                style={`background-color:${color2}`}
                class="w-[30px] h-[30px] -mx-7px border-solid border-gray-900 border-[3px] rounded-full"
              />
              <div
                style={`background-color:${color3}`}
                class="w-[30px] h-[30px] -mx-7px border-solid border-gray-900 border-[3px] rounded-full"
              />
              <div
                style={`background-color:${color4}`}
                class="w-[30px] h-[30px] -mx-7px border-solid border-gray-900 border-[3px] rounded-full"
              />
              <div
                style={`background-color:${color5}`}
                class="w-[30px] h-[30px] -mx-7px border-solid border-gray-900 border-[3px] rounded-full"
              />
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
