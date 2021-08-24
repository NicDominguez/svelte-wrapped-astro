import { Components } from '@astrouxds/astro-web-components';
interface RuxButtonProps {
    /** For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
  Displays an Astro icon matching this string. For a [full list of available icons,
  see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols) */
    icon?: Components.RuxButton["icon"];
    /** Hides slotted text from the button by setting rux-button--icon-only class */
    iconOnly?: Components.RuxButton["iconOnly"];
    /** Changes button style from solid to secondary by setting rux-button--secondary class */
    secondary?: Components.RuxButton["secondary"];
    /** Toggles disabled attribute on the button */
    disabled?: Components.RuxButton["disabled"];
    /** Changes size of a button from standard to small or large by setting sizing classes
  rux-button--small
  rux-button--large */
    size?: Components.RuxButton["size"];
    /** The button type. Use 'submit' to submit native form data. */
    type?: Components.RuxButton["type"];
}
interface RuxButtonEvents {
}
interface RuxButtonSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxButton extends SvelteComponent {
    $$prop_def: RuxButtonProps;
    $$events_def: RuxButtonEvents;
    $$slot_def: RuxButtonSlots;
    $on<K extends keyof RuxButtonEvents>(type: K, callback: (e: RuxButtonEvents[K]) => any): () => void;
    $set($$props: Partial<RuxButtonProps>): void;
    constructor(options: any);
    get icon(): any;
    set icon(icon: any);
    get iconOnly(): any;
    set iconOnly(iconOnly: any);
    get secondary(): any;
    set secondary(secondary: any);
    get disabled(): any;
    set disabled(disabled: any);
    get size(): any;
    set size(size: any);
    get type(): any;
    set type(type: any);
    get getWebComponent(): HTMLRuxButtonElement | undefined;
}
export default RuxButton;
