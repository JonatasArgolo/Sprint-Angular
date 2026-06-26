import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  const name= sessionStorage.getItem("nome")
    const router = inject(Router)
  if(!name) {
    router.navigate([""])
    return false
  }

  return true;
};
