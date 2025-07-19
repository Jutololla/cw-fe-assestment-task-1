
## Found issues
1. Incorrect button color, should be #1A80E5
2. Incorrect background color, should be #121417
3. Incorrect tag color, should be #293038
4. Incorrect tag font color, should be #9EABB8
5. Incorrect tag padding, should be "px-4 py-1"
6. Typo error in placeholder in top searchbar, should be "Search" with capital S.
7. Error in top searchbar, the word "Search" should be a placeholder, not a value.
8. Error in layout of search bar. Elements not aligned.
9. Typo error in logo, missing "c".
10. Error in layout of logo. Elements not aligned.
11. Error in top searchbar, input element not working.
12. Unnecesary span tag in line 91.
13. Unnecesary useState just to store the array of tags.

## Changes Made
- In line 84 in the header functional component, fixed styles to solve issue #6 and #12.
- In component App, deleted usestate that was innecesary, and added a constant named TAGS to store the tags renderes by taglist component.
-In component App, fix styles to solve issues #2
- In BoxArea108 component:
   -Deleted unnecesary useEffects
   -Changes the parent div container for a form tag, and put the onsubmit method
   -Fix the button color to solve issue #1.
   -Renamed the component to MainSearchBar to be more explicit to his function in the code.
- Renamed BoxArea97 to HeroSection to be more explicit to his function in the code.
- In TagList component, put the missing types for the arguments.
- In taglist component, fix the style to solve issues #3 to #5.
