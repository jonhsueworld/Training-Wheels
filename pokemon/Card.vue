<template>
    <table class="card">

        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
        </tr>    

        <tr>
            <td class ="content" rowspan="3">
                <slot name="content"/>
            </td>

            <td class ="title">
                <b>English:</b>&emsp;<slot name="title"/>
            </td>

            <td class ="index">
                <b>Pokedex:</b>&emsp;&emsp;#<slot name="index"/>
            </td>

            <td class ="description" align ="center">
                <slot name="description"/>
            </td>

        </tr>

        <tr>
            <th>Classification</th>
            <th>Height</th>
            <th>Weight</th>
        </tr>    

        <tr>
            <td class ="species">
                <slot name="species"/>
            </td>
            
            <td class ="size">
                <slot name="size"/><a>m</a>
            </td>

            <td class ="weight">
                <slot name="weight"/><a>kg</a>
            </td>      
        </tr>

        <tr>
            <th colspan="4">Evolutionary Chain</th>
        </tr>  

        <tr>
            <td class = "evolutions" colspan="4">
                <slot name="evolutions"/>
            </td>
        </tr>
    </table>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: 0.2s;
        background-color: #383838;
        border-radius: 3px;
        width: 85%;
    }

    th {
        background-color: #507C36;
        font-size: 1em;
        height: 25px;
        text-align: center;
        border-radius: 3px;
        color: white;
        font-family: 'Verdana';
        width: 20%;
        border-left: 3px solid #383838;
    }

    .title, .description, .index, .species, .size, .weight{
        text-transform: capitalize;
        color: white;
        font-family: 'Verdana';
        background-color: #404040;
        border-left: 3px solid #383838;
        text-indent: 7px;
    }

    .content {
        width: 40%;
        background-color: #404040;
        text-align: center;
    }

    .title, .description, .index {
        width: 20%;
    }

    .size, .weight {
        width: 20%;
    }

    .evolutions {
        background-color: #404040;
        text-align: center;
        padding-top: 7px;
    }

    .card:hover {
        transition: 0.2s;
        box-shadow: 0px 1px 9px darkgrey;
    }

</style>