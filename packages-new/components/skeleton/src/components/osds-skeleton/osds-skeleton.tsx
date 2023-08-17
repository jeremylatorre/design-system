import type { OdsSkeletonAttribute } from './interfaces/attributes';
import type { ODS_SKELETON_SIZE } from './constants/skeleton-size';
import { Component, h, Host, Prop } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

@Component({
  tag: 'osds-skeleton',
  styleUrl: 'osds-skeleton.scss',
  shadow: true
})
export class OsdsSkeleton implements OdsSkeletonAttribute {
  /** @see OdsSkeletonAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  /** @see OdsSkeletonAttributes.randomized */
  @Prop({ reflect: true }) public randomized?: boolean = DEFAULT_ATTRIBUTE.randomized;
  /** @see OdsSkeletonAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_SKELETON_SIZE = DEFAULT_ATTRIBUTE.size;

  render() {
    const { inline, randomized } = this;

    return (
      <Host {...{
        'style': {
          width: !inline ? '100%' : randomized ? `${Math.floor(Math.random() * (100 - 30)) + 30}%` : '', // between 30-100%
        }
      }}>
        <div {...{ class: 'loader' }}></div>
      </Host>
    );
  }
}