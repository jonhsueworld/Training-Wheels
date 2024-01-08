<template>
    <tbody class="card">
        <tr>
            <div class ="content">
                <h1>Picture</h1>
                <slot name="content"/>
            </div>

            <td class ="title">
                <h1>Name</h1>
                <slot name="title"/>
            </td>

            <td class ="index">
                <h1>Number</h1>
                <slot name="index"/>
            </td>

            <td class ="description">
                <h1>Type</h1>
                <slot name="description"/>
            </td>
        </tr>

        <tr>
            <td class ="species">
                <slot name="species"/>
            </td>

            <td class ="size">
                <h1>Height</h1>
                <slot name="size"/>
            </td>

            <td class ="weight">
                <h1>Weight</h1>
                <slot name="weight"/>
            </td>
        </tr>
    </tbody>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .card {
        justify-content: center;
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 5px #383838;
        border-radius: 8px;
        margin: 0 5px;
        cursor: pointer;
        transition: 0.2s;
        background-color: #404040;
    }

    h1 {
        background-color: #507C36;
        font-size: 1em;
        height: 25px;
        text-align: center;
    }

    .title, .content, .description, .index, .species, .size, .weight {
        padding: 2px #383838;
        text-transform: capitalize;
        color: white;
        font-family: 'Open Sans', sans-serif;
        border: 1px #383838;
    }

    .content {
        max-width: 350px;
    }

    .title {
        width: 20%;
    }

    .description {
        width: 20%;
    }

    .index {
        width: 20%;
    }

    .size {
        width: 20%;
    }

    .weight {
        width: 20%;
    }

    .card:hover {
        transition: 0.2s;
        box-shadow: 0px 1px 9px darkgrey;
    }

</style>