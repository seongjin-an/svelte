<script>
    import {cartStore} from "../../store/cart/cartStore";

    //스토어 앞에 $는 자동 구독을 의미함
    let total = $cartStore.reduce((acc, item) => acc + item.price * item.quantity, 0)
</script>

<h1>Cart</h1>
{#if $cartStore.length === 0}
    <div>empty</div>
{:else}
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {#each $cartStore as item}
                <tr>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                </tr>
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">
                    <label>Total</label>
                </td>
                <td></td>
                <td>${total.toFixed(2)}</td>
            </tr>
        </tfoot>
    </table>
{/if}
