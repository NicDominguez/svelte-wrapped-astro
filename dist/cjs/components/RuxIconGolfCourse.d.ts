import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGolfCourseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGolfCourse["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGolfCourse["size"];
}
interface RuxIconGolfCourseEvents {
}
interface RuxIconGolfCourseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGolfCourse extends SvelteComponent {
    $$prop_def: RuxIconGolfCourseProps;
    $$events_def: RuxIconGolfCourseEvents;
    $$slot_def: RuxIconGolfCourseSlots;
    $on<K extends keyof RuxIconGolfCourseEvents>(type: K, callback: (e: RuxIconGolfCourseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGolfCourseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGolfCourseElement | undefined;
}
export default RuxIconGolfCourse;
