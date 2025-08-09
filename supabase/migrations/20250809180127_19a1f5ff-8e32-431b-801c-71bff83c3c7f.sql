-- Fix policies: split combined actions into separate statements; keep idempotent

-- Admins manage checkins: split SELECT and DELETE
DROP POLICY IF EXISTS "Admins select all checkins" ON public.checkins;
CREATE POLICY "Admins select all checkins"
ON public.checkins
FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins delete checkins" ON public.checkins;
CREATE POLICY "Admins delete checkins"
ON public.checkins
FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
