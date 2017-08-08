import hbs from 'htmlbars-inline-precompile';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import {setupComponentTest} from 'ember-mocha';

describe('Integration: Component: gh-unsplash', function() {
    setupComponentTest('gh-unsplash', {
        integration: true
    });

    it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#gh-unsplash}}
    //     template content
    //   {{/gh-unsplash}}
    // `);

        this.render(hbs`{{gh-unsplash}}`);
        expect(this.$()).to.have.length(1);
    });
});