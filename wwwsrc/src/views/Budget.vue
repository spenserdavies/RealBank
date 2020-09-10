<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-3 py-2 text-white">
                <h4>Budgets</h4>
            </div>
        </div>
        <div class="row mt-3 bg-white">
            <div class="col mx-auto py-2 text-info">
                <button v-if="billBudgetForm == false" @click="billBudgetForm = true" class="btn btn-success m-3 float-right">Create Budget</button>
                <h4 class="m-3">Bills:</h4>
                <div class="row" v-if="billBudgetForm">
                    <form>
                        <label class="ml-3" for="budget">Budget</label>
                        <input class="m-2" type="number" placeholder="$$$"/>
                        <button type="button" class="btn btn-secondary border-info mx-2" @click="billBudgetForm = false">Cancel</button>
                        <button class="btn btn-info mx-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mt-3 bg-white">
            <div class="col mx-auto py-2 text-info">
                <button v-if="carBudgetForm == false" @click="carBudgetForm = true" class="btn btn-success m-3 float-right">Create Budget</button>
                <h4 class="m-3">Car:</h4>
                <div class="row" v-if="carBudgetForm">
                    <form>
                        <label class="ml-3" for="budget">Budget</label>
                        <input class="m-2" type="number" placeholder="$$$"/>
                        <button class="btn btn-secondary border-info mx-2" @click="carBudgetForm = false">Cancel</button>
                        <button class="btn btn-info mx-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mt-3 bg-white">
            <div class="col mx-auto py-2 text-info">
                <button v-if="foodBudgetForm == false" @click="foodBudgetForm = true" class="btn btn-success m-3 float-right">Create Budget</button>
                <h4 class="m-3">Food:</h4>
                <div class="row" v-if="foodBudgetForm">
                    <form>
                        <label class="ml-3" for="budget">Budget</label>
                        <input class="m-2" type="number" placeholder="$$$"/>
                        <button class="btn btn-secondary border-info mx-2"  @click="foodBudgetForm = false">Cancel</button>
                        <button class="btn btn-info mx-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mt-3 bg-white">
            <div class="col mx-auto py-2 text-info">
                <button v-if="homeBudgetForm == false" @click="homeBudgetForm = true" class="btn btn-success m-3 float-right">Create Budget</button>
                <h4 class="m-3">Home:</h4>
                <div class="row" v-if="homeBudgetForm">
                    <form>
                        <label class="ml-3" for="budget">Budget</label>
                        <input class="m-2" type="number" placeholder="$$$"/>
                        <button class="btn btn-secondary border-info mx-2" @click="homeBudgetForm = false">Cancel</button>
                        <button class="btn btn-info mx-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row mt-3 bg-white">
            <div class="col mx-auto py-2 text-info">
                <button v-if="otherBudgetForm == false" @click="otherBudgetForm = true" class="btn btn-success m-3 float-right">Create Budget</button>
                <h4 class="m-3">Other:</h4>
                <div class="row" v-if="otherBudgetForm">
                    <form>
                        <label class="ml-3" for="budget">Budget</label>
                        <input class="m-2" type="number" placeholder="$$$"/>
                        <button class="btn btn-secondary border-info mx-2"  @click="otherBudgetForm = false">Cancel</button>
                        <button class="btn btn-info mx-2">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "budget",
    data(){
        return{
            billBudgetForm: false,
            carBudgetForm: false,
            foodBudgetForm: false,
            homeBudgetForm: false,
            otherBudgetForm: false,
        }
    }
}
</script>

<style>

</style>