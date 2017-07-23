//This file is generated by ./target/cascadable.js

namespace MakerJs {

    export interface ICascadeModel extends ICascade {

        /**
         * Add a model as a child. This is basically equivalent to:
```
parentModel.models[childModelId] = childModel;
```
with additional checks to make it safe for cascading.
         * 
         * @param childModel The model to add.
         * @param childModelId The id of the child model.
         * @param overWrite (default false) Optional flag to overwrite any model referenced by childModelId. Default is false, which will create an id similar to childModelId.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        addModel(childModel: IModel, childModelId: string, overWrite?: boolean): ICascadeModel;

        /**
         * Add a path as a child. This is basically equivalent to:
```
parentModel.paths[childPathId] = childPath;
```
with additional checks to make it safe for cascading.
         * 
         * @param pathContext The path to add.
         * @param pathId The id of the path.
         * @param overWrite (default false) Optional flag to overwrite any path referenced by pathId. Default is false, which will create an id similar to pathId.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        addPath(pathContext: IPath, pathId: string, overWrite?: boolean): ICascadeModel;

        /**
         * Add a model as a child of another model. This is basically equivalent to:
```
parentModel.models[childModelId] = childModel;
```
with additional checks to make it safe for cascading.
         * 
         * @param parentModel The model to add to.
         * @param childModelId The id of the child model.
         * @param overWrite (default false) Optional flag to overwrite any model referenced by childModelId. Default is false, which will create an id similar to childModelId.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        addTo(parentModel: IModel, childModelId: string, overWrite?: boolean): ICascadeModel;

        /**
         * DEPRECATED
Break a model's paths everywhere they intersect with another path.
         * 
         * @param modelToIntersect Optional model containing paths to look for intersection, or else the modelToBreak will be used.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        breakPathsAtIntersections(modelToIntersect?: IModel): ICascadeModel;

        /**
         * Center a model at [0, 0].
         * 
         * @param centerX (default true) Boolean to center on the x axis. Default is true.
         * @param centerY (default true) Boolean to center on the y axis. Default is true.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        center(centerX?: boolean, centerY?: boolean): ICascadeModel;

        /**
         * Combine 2 models. Each model will be modified accordingly.
         * 
         * @param modelB Second model to combine.
         * @param includeAInsideB (default false) Flag to include paths from modelA which are inside of modelB.
         * @param includeAOutsideB (default true) Flag to include paths from modelA which are outside of modelB.
         * @param includeBInsideA (default false) Flag to include paths from modelB which are inside of modelA.
         * @param includeBOutsideA (default true) Flag to include paths from modelB which are outside of modelA.
         * @param options Optional ICombineOptions object.
         * @returns this cascade container, this.$result will be A new model containing both of the input models as "a" and "b".

         */
        combine(modelB: IModel, includeAInsideB?: boolean, includeAOutsideB?: boolean, includeBInsideA?: boolean, includeBOutsideA?: boolean, options?: ICombineOptions): ICascadeModel;

        /**
         * Combine 2 models, resulting in a intersection. Each model will be modified accordingly.
         * 
         * @param modelB Second model to combine.
         * @returns this cascade container, this.$result will be A new model containing both of the input models as "a" and "b".

         */
        combineIntersection(modelB: IModel): ICascadeModel;

        /**
         * Combine 2 models, resulting in a subtraction of B from A. Each model will be modified accordingly.
         * 
         * @param modelB Second model to combine.
         * @returns this cascade container, this.$result will be A new model containing both of the input models as "a" and "b".

         */
        combineSubtraction(modelB: IModel): ICascadeModel;

        /**
         * Combine 2 models, resulting in a union. Each model will be modified accordingly.
         * 
         * @param modelB Second model to combine.
         * @returns this cascade container, this.$result will be A new model containing both of the input models as "a" and "b".

         */
        combineUnion(modelB: IModel): ICascadeModel;

        /**
         * Convert a model to match a different unit system.
         * 
         * @param destUnitType The unit system.
         * @returns this cascade container, this.$result will be The scaled model (for cascading).

         */
        convertUnits(destUnitType: string): ICascadeModel;

        /**
         * Expand all paths in a model, then combine the resulting expansions.
         * 
         * @param distance Distance to expand.
         * @param joints (default 0) Number of points at a joint between paths. Use 0 for round joints, 1 for pointed joints, 2 for beveled joints.
         * @param combineOptions (default {}) Optional object containing combine options.
         * @returns this cascade container, this.$result will be Model which surrounds the paths of the original model.

         */
        expandPaths(distance: number, joints?: number, combineOptions?: ICombineOptions): ICascadeModel;

        /**
         * Find paths that have common endpoints and form loops.
         * 
         * @param options Optional options object.
         * @returns this cascade container, this.$result will be A new model with child models ranked according to their containment within other found loops. The paths of models will be IPathDirectionalWithPrimeContext.

         */
        findLoops(options?: IFindLoopsOptions): ICascadeModel;

        /**
         * Create a clone of a model, mirrored on either or both x and y axes.
         * 
         * @param mirrorX Boolean to mirror on the x axis.
         * @param mirrorY Boolean to mirror on the y axis.
         * @returns this cascade container, this.$result will be Mirrored model.

         */
        mirror(mirrorX: boolean, mirrorY: boolean): ICascadeModel;

        /**
         * Move a model to an absolute point. Note that this is also accomplished by directly setting the origin property. This function exists for cascading.
         * 
         * @param origin The new position of the model.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        move(origin: IPoint): ICascadeModel;

        /**
         * Move a model's origin by a relative amount.
         * 
         * @param delta The x & y adjustments as a point object.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        moveRelative(delta: IPoint): ICascadeModel;

        /**
         * Moves all of a model's children (models and paths, recursively) in reference to a single common origin. Useful when points between children need to connect to each other.
         * 
         * @param origin Optional offset reference point.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        originate(origin?: IPoint): ICascadeModel;

        /**
         * Outline a model by a specified distance. Useful for accommodating for kerf.
         * 
         * @param distance Distance to outline.
         * @param joints (default 0) Number of points at a joint between paths. Use 0 for round joints, 1 for pointed joints, 2 for beveled joints.
         * @param inside (default false) Optional boolean to draw lines inside the model instead of outside.
         * @param options (default {}) Options to send to combine() function.
         * @returns this cascade container, this.$result will be Model which surrounds the paths outside of the original model.

         */
        outline(distance: number, joints?: number, inside?: boolean, options?: ICombineOptions): ICascadeModel;

        /**
         * Prefix the ids of paths in a model.
         * 
         * @param prefix The prefix to prepend on paths ids.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        prefixPathIds(prefix: string): ICascadeModel;

        /**
         * Remove paths from a model which have endpoints that do not connect to other paths.
         * 
         * @param pointMatchingDistance Optional max distance to consider two points as the same.
         * @param keep Optional callback function (which should return a boolean) to decide if a dead end path should be kept instead.
         * @param trackDeleted Optional callback function which will log discarded paths and the reason they were discarded.
         * @returns this cascade container, this.$result will be The input model (for cascading).

         */
        removeDeadEnds(pointMatchingDistance?: number, keep?: IWalkPathBooleanCallback, trackDeleted?: undefined): ICascadeModel;

        /**
         * Rotate a model.
         * 
         * @param angleInDegrees The amount of rotation, in degrees.
         * @param rotationOrigin (default [0, 0]) The center point of rotation.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        rotate(angleInDegrees: number, rotationOrigin?: IPoint): ICascadeModel;

        /**
         * Scale a model.
         * 
         * @param scaleValue The amount of scaling.
         * @param scaleOrigin (default false) Optional boolean to scale the origin point. Typically false for the root model.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        scale(scaleValue: number, scaleOrigin?: boolean): ICascadeModel;

        /**
         * Simplify a model's paths by reducing redundancy: combine multiple overlapping paths into a single path. The model must be originated.
         * 
         * @param options Optional options object.
         * @returns this cascade container, this.$result will be The simplified model (for cascading).

         */
        simplify(options?: ISimplifyOptions): ICascadeModel;

        /**
         * Recursively walk through all child models and paths for a given model.
         * 
         * @param options Object containing callbacks.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        walk(options: IWalkOptions): ICascadeModel;

        /**
         * Move a model so its bounding box begins at [0, 0].
         * 
         * @param zeroX (default true) Boolean to zero on the x axis. Default is true.
         * @param zeroY (default true) Boolean to zero on the y axis. Default is true.
         * @returns this cascade container, this.$result will be The original model (for cascading).

         */
        zero(zeroX?: boolean, zeroY?: boolean): ICascadeModel;
    }

    export interface ICascadePath extends ICascade {

        /**
         * Alter a path by lengthening or shortening it.
         * 
         * @param distance Numeric amount of length to add or remove from the path. Use a positive number to lengthen, negative to shorten. When shortening: this function will not alter the path and will return null if the resulting path length is less than or equal to zero.
         * @param useOrigin (default false) Optional flag to alter from the origin instead of the end of the path.
         * @returns this cascade container, this.$result will be The original path (for cascading), or null if the path could not be altered.

         */
        alterLength(distance: number, useOrigin?: boolean): ICascadePath;

        /**
         * Breaks a path in two. The supplied path will end at the supplied pointOfBreak,
a new path is returned which begins at the pointOfBreak and ends at the supplied path's initial end point.
For Circle, the original path will be converted in place to an Arc, and null is returned.
         * 
         * @param pointOfBreak The point at which to break the path.
         * @returns this cascade container, this.$result will be A new path of the same type, when path type is line or arc. Returns null for circle.

         */
        breakAtPoint(pointOfBreak: IPoint): ICascadePath;

        /**
         * Center a path at [0, 0].
         * 
         * @returns this cascade container, this.$result will be The original path (for cascading).

         */
        center(): ICascadePath;

        /**
         * Create a clone of a path. This is faster than cloneObject.
         * 
         * @param offset Optional point to move path a relative distance.
         * @returns this cascade container, this.$result will be Cloned path.

         */
        clone(offset?: IPoint): ICascadePath;

        /**
         * Create a clone of a path, mirrored on either or both x and y axes.
         * 
         * @param mirrorX Boolean to mirror on the x axis.
         * @param mirrorY Boolean to mirror on the y axis.
         * @returns this cascade container, this.$result will be Mirrored path.

         */
        mirror(mirrorX: boolean, mirrorY: boolean): ICascadePath;

        /**
         * Move a path to an absolute point.
         * 
         * @param origin The new origin for the path.
         * @returns this cascade container, this.$result will be The original path (for cascading).

         */
        move(origin: IPoint): ICascadePath;

        /**
         * Move a path's origin by a relative amount.
         * 
         * @param delta The x & y adjustments as a point object.
         * @param subtract Optional boolean to subtract instead of add.
         * @returns this cascade container, this.$result will be The original path (for cascading).

         */
        moveRelative(delta: IPoint, subtract?: boolean): ICascadePath;

        /**
         * Rotate a path.
         * 
         * @param angleInDegrees The amount of rotation, in degrees.
         * @param rotationOrigin (default [0, 0]) The center point of rotation.
         * @returns this cascade container, this.$result will be The original path (for cascading).

         */
        rotate(angleInDegrees: number, rotationOrigin?: IPoint): ICascadePath;

        /**
         * Scale a path.
         * 
         * @param scaleValue The amount of scaling.
         * @returns this cascade container, this.$result will be The original path (for cascading).

         */
        scale(scaleValue: number): ICascadePath;

        /**
         * Move a path so its bounding box begins at [0, 0].
         * 
         * @returns this cascade container, this.$result will be The original path (for cascading).

         */
        zero(): ICascadePath;
    }

    export interface ICascadePoint extends ICascade {

        /**
         * Add two points together and return the result as a new point object.
         * 
         * @param b Second point.
         * @param subtract Optional boolean to subtract instead of add.
         * @returns this cascade container, this.$result will be A new point object.

         */
        add(b: IPoint, subtract?: boolean): ICascadePoint;

        /**
         * Get the average of two points.
         * 
         * @param b Second point.
         * @returns this cascade container, this.$result will be New point object which is the average of a and b.

         */
        average(b: IPoint): ICascadePoint;

        /**
         * Clone a point into a new point.
         * 
         * @returns this cascade container, this.$result will be A new point with same values as the original.

         */
        clone(): ICascadePoint;

        /**
         * From an array of points, find the closest point to a given reference point.
         * 
         * @param pointOptions Array of points to choose from.
         * @returns this cascade container, this.$result will be The first closest point from the pointOptions.

         */
        closest(pointOptions: IPoint[]): ICascadePoint;

        /**
         * Distort a point's coordinates.
         * 
         * @param scaleX The amount of x scaling.
         * @param scaleY The amount of y scaling.
         * @returns this cascade container, this.$result will be A new point.

         */
        distort(scaleX: number, scaleY: number): ICascadePoint;

        /**
         * Create a clone of a point, mirrored on either or both x and y axes.
         * 
         * @param mirrorX Boolean to mirror on the x axis.
         * @param mirrorY Boolean to mirror on the y axis.
         * @returns this cascade container, this.$result will be Mirrored point.

         */
        mirror(mirrorX: boolean, mirrorY: boolean): ICascadePoint;

        /**
         * Rotate a point.
         * 
         * @param angleInDegrees The amount of rotation, in degrees.
         * @param rotationOrigin (default [0, 0]) The center point of rotation.
         * @returns this cascade container, this.$result will be A new point.

         */
        rotate(angleInDegrees: number, rotationOrigin?: IPoint): ICascadePoint;

        /**
         * Round the values of a point.
         * 
         * @param accuracy Optional exemplar number of decimal places.
         * @returns this cascade container, this.$result will be A new point with the values rounded.

         */
        rounded(accuracy?: number): ICascadePoint;

        /**
         * Scale a point's coordinates.
         * 
         * @param scaleValue The amount of scaling.
         * @returns this cascade container, this.$result will be A new point.

         */
        scale(scaleValue: number): ICascadePoint;

        /**
         * Subtract a point from another point, and return the result as a new point. Shortcut to Add(a, b, subtract = true).
         * 
         * @param b Second point.
         * @returns this cascade container, this.$result will be A new point object.

         */
        subtract(b: IPoint): ICascadePoint;
    }
}
