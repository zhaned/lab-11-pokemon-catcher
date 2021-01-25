# EDIT-THIS-README

## HTML Set Up
1) Context/instructions for the visitor
2) Display three random Pokemon

## PLAN
1) Generate three random Pokemon
    1) ID checked
    2) Check for uniqueness
        - If not, regenerate three new random pokemon
    3) Display image, clickable

2) Encounters
    1) ID checked
    2) Increment `encounter` for all the Pokemon displayed
        - If first time encounter, generate an item for it for results
            - Item should have an `encounter: x` and `caught: x`

3) Caught
    1) On click
    2) Increment `caught` for that Pokemon
    3) After clicking 10 times, redirect to results page
        - If <10, clear the page and generate three new pokemon

4) In the results page, display the pokemons encountered
    - Display `encounter` and `caught` count under each Pokemon

