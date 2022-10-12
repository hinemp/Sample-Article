import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useMemo, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import AgentUpdate from "./article_components/AgentUpdate";
import MapUpdate from "./article_components/MapUpdate";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { getComments } from "./services/comments";

function App() {
  const [allComments, setAllComments] = useState([]);
  const [commentCount, setCommentCount] = useState(allComments.length);

  const commentsByParentId = useMemo(() => {
    const group = {};
    allComments.forEach((comment) => {
      group[comment.parent_id] ||= [];
      group[comment.parent_id].push(comment);
    });
    return group;
  }, [allComments]);

  useEffect(() => {
    getComments().then((res) => {
      if (res != null) {
        setAllComments(res);
      }
    });
  }, [commentCount]);

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Shotbot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <img
                    src="https://img.icons8.com/color/480/valorant.png"
                    alt=""
                  />
                </Nav.Link>
                <Nav.Link title="Media">MEDIA</Nav.Link>
                <Nav.Link title="News">NEWS</Nav.Link>
                <Nav.Link title="Leaderboards">LEADERBOARDS</Nav.Link>
                <Nav.Link title="Support">SUPPORT</Nav.Link>
                <NavDropdown title="GAME INFO" id="basic-nav-dropdown">
                  <NavDropdown.Item>Agents</NavDropdown.Item>
                  <NavDropdown.Item>Maps</NavDropdown.Item>
                  <NavDropdown.Item>Arsenal</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <article>
          <h1>Patch Notes 5.07</h1>
          <h5>October 4th, 2022</h5>
          <br />
          <br />
          <section className="agent_updates" aria-label="Agent Updates">
            <h3>Agent Updates</h3>
            <div class="divider div-transparent"></div>
            <AgentUpdate
              img="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png"
              agent="Skye"
              blurb="Guiding Light’s destructibility didn’t feel like meaningful counterplay, instead overtly punishing when Skye tried to throw them at a longer range. By increasing the top-end output and rewarding Skye for bending her birds into the right spots, we intend to foster more teamwork and differentiate her Guiding Light from other flashes in the game—especially when compared to Duelists."
              changes={
                <>
                  <h5>GUIDING LIGHT (E) flashbang scaling paradigm changed</h5>
                  <ul>
                    <li>
                      The max flash duration of Skye's Guiding Light now scales
                      from 1s to 2.25s over a .75s charge up after being cast
                    </li>
                    <li>Guiding Light can no longer be shot and destroyed</li>
                    <li>
                      New VFX, UI, and sounds added to communicate new gameplay
                      intent
                    </li>
                    <li>
                      Unequip Delay out of Guiding Light increased from .75s to
                      .85s
                    </li>
                  </ul>
                </>
              }
            ></AgentUpdate>
            <div class="divider div-transparent"></div>
            <AgentUpdate
              img="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png"
              agent="KAY/O"
              blurb="KAY/O’s underhanded FLASH/DRIVE (right-click) has been overperforming relative to other “pop” flashes (example, Phoenix's flash or Yoru’s flash). And we feel as though labbed out left-click overhand throws aren’t generating a powerful enough reward for the mastery required to get them to pop in the right place. This tuning weakens the right-click when compared to pop flashes from Duelists, with the belief that KAY/O should pay a cost for his versatility."
              changes={
                <>
                  <h5>FLASH/DRIVE (Q)</h5>
                  <ul>
                    <li>
                      Underhand (right-click) flashbang max duration decreased
                      from 2s to 1.25s
                    </li>
                    <li>
                      Overhand (left-click) flashbang max duration increased
                      from 2s to 2.25s
                    </li>
                    <li>
                      Unequip Delay out of both flashes increased from .6s to
                      .85s
                    </li>
                    <li>
                      Unequip Delay out of Guiding Light increased from .75s to
                      .85s
                    </li>
                  </ul>
                </>
              }
            ></AgentUpdate>
            <div class="divider div-transparent"></div>
            <AgentUpdate
              img="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png"
              agent="Reyna"
              blurb="Reyna’s flash underperforms as a selfish entry-tool, especially at higher skill levels. This set of changes is intended to give Reyna more agency around how she decides to peek after casting Leer. Also, it should sharpen Leer as a powerful angle-breaking tool against Operators on maps with longer sightlines. We’ve also felt like individual casts of the eye remain in the world for too long when the eye isn’t destroyed. If Reyna is now able to make more selfish plays off her Leer, we then wanted to reduce some of the value it has when thrown for teammates."
              changes={
                <>
                  <h5>LEER (C)</h5>
                  <ul>
                    <li>
                      Wind-up of nearsight effect decreased from .6s to .4s
                    </li>
                    <li>Range Restriction on Leer removed</li>
                    <li>Nearsight unequip delay decreased: from .7 to .5</li>
                    <li>Duration decreased from 2.6s to 2.0s</li>
                  </ul>
                </>
              }
            ></AgentUpdate>
            <div class="divider div-transparent"></div>
            <AgentUpdate
              img="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png"
              agent="Yoru"
              blurb="Reyna’s flash underperforms as a selfish entry-tool, especially at higher skill levels. This set of changes is intended to give Reyna more agency around how she decides to peek after casting Leer. Also, it should sharpen Leer as a powerful angle-breaking tool against Operators on maps with longer sightlines. We’ve also felt like individual casts of the eye remain in the world for too long when the eye isn’t destroyed. If Reyna is now able to make more selfish plays off her Leer, we then wanted to reduce some of the value it has when thrown for teammates."
              changes={
                <>
                  <h5>General Changes</h5>
                  <ul>
                    <li>BLINDSIDE (Q) duration increased from 1.5s to 1.75s</li>
                    <li>
                      Reduced the size of the hologram on the body marker that
                      shows up when dead bodies are turned off.
                    </li>
                  </ul>
                  <h5>Flash Visual Updates</h5>
                  <ul>
                    <li>Nearsight unequip delay decreased: from .7 to .5</li>
                    <li>Duration decreased from 2.6s to 2.0s</li>
                  </ul>
                </>
              }
            ></AgentUpdate>
          </section>
          <div class="divider div-transparent"></div>
          <section className="map_updates" aria-label="Map Updates">
            <h3>Map Updates</h3>
            <div class="divider div-transparent"></div>
            <MapUpdate
              before="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc6e720b01eef70f1/633797ab40abbe169f6d2d0a/100422_BEFORE001.jpg"
              after="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb86b57e27e9b1e4a/6337a20375c0be225b8da276/100422_AFTER001.jpg"
              location="Arcade"
              description="Opened a cubby here to make it easier for Attacking side to hold against Defender aggression from both directions."
            />
            <MapUpdate
              before="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1c9823a6e4611c38/633797aa763d011cd3e95d83/100422_BEFORE002.jpg"
              after="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0adb01afcf329a25/6337a203961acb239b3e10dc/100422_AFTER001AFTER002.jpg"
              location="B Site"
              description="“Jump” up has been changed to a ramp directly onto the site platform, which should make moving around that space more straightforward."
            />
            <MapUpdate
              before="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt056833f51e6a794e/633797aba920fd42f67e84cf/100422_BEFORE007.jpg"
              after="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6172f0c99712d4fa/6337a204fb8e0d2b8a31324c/100422_AFTER001AFTER007.jpg"
              location="A Dish"
              description="The dish is intact but removed the far path to make moving through this space more direct for both sides. We found trying to watch/control these spaces simultaneously was unnecessarily difficult for all. The team hopes the changes here and on A Drop will encourage everyone to use this route more often."
            />
            <MapUpdate
              before="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt19ee69d8fd34115d/633797aaeb66820cfba12d7e/100422_BEFORE009.jpg"
              after="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8fef4570c2939e58/6337a204336df11e17ff004a/100422_AFTER001AFTER009.png"
              location="A Rope"
              description="This path has been a little too easy for Attackers to control with a single smoke. The adjustments should give Defenders more options for both the initial hold and retaking A. Watch your step."
            />
          </section>
          <section className="bug_fixes" aria-label="Bug Fixes">
            <h3>Bug Fixes</h3>
            <ul>
              <li>
                Fixed issue where KAY/O’s NULL/CMD disabled Killjoy’s Turret if
                the turret is hit by a pulse but Killjoy is not
              </li>
              <li>
                Fixed issue where Killjoy’s Turret fires straight forward after
                firing at an enemy and then losing sight of them
              </li>
              <li>
                Fixed issue where Killjoy’s Turret would fire with no target
                when coming online if it was disabled while firing at a target
              </li>
              <li>
                Fixed a bug where Phoenix would not automatically re-equip a
                weapon at the end of Run It Back
              </li>
              <li>
                Fixed Breach’s Rolling Thunder showing dead enemies hit in the
                combat report
              </li>
              <li>
                Fixed issue where if a player was deafened by multiple sources,
                when the first deafen ended it removed the deafening effect
                completely
              </li>
            </ul>
          </section>
        </article>
        <h3 className="comments-title">Comment Section</h3>
        <CommentForm setCommentCount={setCommentCount}></CommentForm>
        {allComments != null && allComments.length > 0 && (
          <CommentList
            comments={commentsByParentId[null]}
            relation={commentsByParentId}
            setCommentCount={setCommentCount}
          />
        )}
      </main>
      {/* Design the article as a separate entity from the comment section for simplicity */}
    </div>
  );
}

export default App;
