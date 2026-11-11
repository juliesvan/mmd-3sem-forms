"use client";

import postRecipe from "../actions/action";
import { useActionState } from "react";

const RecipeForm = () => {
  const [state, postRecipeAction, isPending] = useActionState(postRecipe, { succes: null, message: "" });
  return (
    <>
      <form>
        <input type="text" name="recipename" placeholder="Opskriftens titel" defaultValue="Placeholder der kan rettes" className="border" />
        <button formAction={postRecipeAction} type="submit" className="border">
          {isPending ? "Submitting..." : "Opret opskrift"}
        </button>
      </form>
      {state.message && <div className={state.succes ? "text-green-500" : "text-red-500"}>{state.message}</div>}
    </>
  );
};

export default RecipeForm;
