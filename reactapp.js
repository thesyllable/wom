'use strict';

/** Main application component. */
var App = React.createClass({
  displayName: 'App',

  render: function() {
    return React.DOM.div({className:'app'},
      JQueryMobilePage({id:'one'}, PageOneContent(null)),
      JQueryMobilePage({id:'two'}, PageTwoContent(null)),
      JQueryMobilePage({id:'popup', headerTheme:'b'}, PagePopUpContent(null))
    );
  }
});
App = React.createFactory(App);

/** jQuery Mobile button component. */
var JQueryMobileButton = React.createClass({
  displayName: 'JQueryMobileButton',

  getDefaultProps: function() {
    return {className:'ui-btn ui-shadow ui-corner-all'};
  },

  render: function() {
    return React.DOM.p(null,
      React.DOM.a(this.props, this.props.children)
    );
  }
});
JQueryMobileButton = React.createFactory(JQueryMobileButton);

/** jQuery Mobile page content component. */
var JQueryMobileContent = React.createClass({
  displayName: 'JQueryMobileContent',

  render: function() {
    return React.DOM.div({role:'main', className:'ui-content'},
      this.props.children
    );
  }
});
JQueryMobileContent = React.createFactory(JQueryMobileContent);

/** jQuery Mobile navbar list items. 
var JQueryMobileNavbarItems = React.createClass({
  displayName: 'JQueryMobileNavbarItems',

  render: function() {
    return React.DOM.li(null, React.DOM.a({href:'#two'},'page two')),
        React.DOM.li(null, React.DOM.a({href:'#popup'},'popup'))
}
JQueryMobileNavbarItems = React.createFactory(JQueryMobileNavbarItems);
*/

/** jQuery Mobile navbar component. */
var JQueryMobileNavbar = React.createClass({
  displayName: 'JQueryMobileNavbar',

  render: function() {
    return React.DOM.div({'data-role':'navbar'},
      React.DOM.ul(null,
        React.DOM.li(null,
          React.DOM.a({href:'#two'},'Page two')
            )
          )
        );
  }
});
JQueryMobileNavbar = React.createFactory(JQueryMobileNavbar);


/** jQuery Mobile page component. */
var JQueryMobilePage = React.createClass({
  displayName: 'JQueryMobilePage',

  getDefaultProps: function() {
    return {'data-role':'page', 'data-theme':'a'};
  },

  render: function() {
    var props = {};
    for (var key in this.props) {
      props[key] = this.props[key];
    }
    return React.DOM.div(props,
      JQueryMobileNavbar(null, this.props.id),
      JQueryMobileContent(null, this.props.children)
    );
  }
});
JQueryMobilePage = React.createFactory(JQueryMobilePage);


/** Application page one component. */
var PageOneContent = React.createClass({
  displayName: 'Professional Summary',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Professional Summary'),
      React.DOM.p(null,'Product Owner with extensive experience as a Senior Producer, Project, and Product Manager focusing on feature development by leading efficient agile (scrum, waterfall, hybrid, iterative sprints) teams through collaboration, tools, and process. Prudent and data driven (KPIs, analytics, A/B testing) decision maker responsible for continually executing, delivering, and shipping on tight timelines to stakeholder objectives as well as post-launch Live Operations. Fully rounded business view from holding positions in Product, Marketing, Operations, and Information Systems and working with engineers, artists, and designers. Currently in the mobile gaming industry as a Platform Producer as well as doing external production (managing external teams) for apps utilizing licensed IP . Previously built a suite of online services for multi-platform critically acclaimed mobile games (F2P, Premium, Action, RPG, FPS) according to feature set specs and requirements. Previous console game production experience shipping AAA titles with internal teams utilizing licensed IP. Thorough knowledge in development pipelines/toolchains, reporting at a team and executive level as well as Agile methodologies; effectively applying them as needed for my teams.Fondness for and interest in utilizing the newest technologies, working with programmers, translating product vision into product roadmaps, development best practices, and improving how things are done at every step of the way.'
        ),
      React.DOM.h3(null, 'Show internal pages:'),
      JQueryMobileButton({href:'#two'}, 'Show page "two"'),
      JQueryMobileButton({href:'#popup', 'data-rel':'dialog', 'data-transition':'pop'}, 'Show page "popup" (as a dialog)')
    );
  }
});
PageOneContent = React.createFactory(PageOneContent);

/** Application page two component. */
var PageTwoContent = React.createClass({
  displayName: 'Sample Projects',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Project Dashboard'),
      React.DOM.a({href:'../gameofwar.html'}, 'link'),
      React.DOM.p(null, 'Notice that the theme is different for this page because we\'ve added a few ',
        React.DOM.code(null, 'data-theme'),
        ' swatch assigments here to show off how flexible it is. You can add any content or widget to these pages, but we\'re keeping these simple.'),
      JQueryMobileButton({href:'#one', 'data-direction':'reverse', className:'ui-btn ui-shadow ui-corner-all ui-btn-b'}, 'Back to page "one"')
    );
  }
});
PageTwoContent = React.createFactory(PageTwoContent);

/** Application popup page component. */
var PagePopUpContent = React.createClass({
  displayName: 'PagePopUpContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Popup'),
      React.DOM.p(null, 'I have an id of "popup" on my page container and only look like a dialog because the link to me had a ',
        React.DOM.code(null, 'data-rel="dialog"'),
        ' attribute which gives me this inset look and a ',
        React.DOM.code(null, 'data-transition="pop"'),
        ' attribute to change the transition to pop. Without this, I\'d be styled as a normal page.'),
      JQueryMobileButton({href:'#one', 'data-rel':'back', className:'ui-btn ui-shadow ui-corner-all ui-btn-inline ui-icon-back ui-btn-icon-left'}, 'Back to page "one"')
    );
  }
});
PagePopUpContent = React.createFactory(PagePopUpContent);

// Render application.
ReactDOM.render(App(null), document.getElementById('content'));
