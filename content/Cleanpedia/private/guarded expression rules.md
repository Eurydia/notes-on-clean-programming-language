# Guarded expression rules

## Guard rule of selection

Guards are tried in descending order from top to bottom.

The first guard to yield true is be selected, and the associated expression is evaluated.

Guards are only tried if their implementation is selected.
If a function implementation is not selected, guarded expressions, which belong to the implementation, are never tried.

Once a function implementation is selected, subsequent implementations are not tried, even if no guarded expression can be selected.

## Guard rule of signature

The expression associated with a guarded expression must have the same type.

