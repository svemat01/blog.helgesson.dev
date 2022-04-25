<img class="backgroundShapes" src="/bgShapes.svg" alt="shapes" />

<style lang="scss">
    .backgroundShapes {
        position: absolute;
        top: 0;
        left: 0;
        height: calc(20rem + 29vw);

        z-index: -1;

        @media screen and (max-width: $tablet-size) {
            display: none;
        }
    }
</style>
