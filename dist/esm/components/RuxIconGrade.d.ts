import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGradeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGrade["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGrade["size"];
}
interface RuxIconGradeEvents {
}
interface RuxIconGradeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGrade extends SvelteComponent {
    $$prop_def: RuxIconGradeProps;
    $$events_def: RuxIconGradeEvents;
    $$slot_def: RuxIconGradeSlots;
    $on<K extends keyof RuxIconGradeEvents>(type: K, callback: (e: RuxIconGradeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGradeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGradeElement | undefined;
}
export default RuxIconGrade;
