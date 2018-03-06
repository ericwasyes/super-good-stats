import React, { Component } from 'react';
import { Card, Statistic, Table, Header, Image } from 'semantic-ui-react'

class CareerStats extends Component {
    componentDidMount() {
        console.log(this.props.stats);
    }

    render() {
        if (this.props.stats !== undefined) {
            console.log(this.props.stats);
            let pvp = this.props.stats.allPvP.allTime;
            return (
                <Table basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Weapon Type</Table.HeaderCell>
                            <Table.HeaderCell>Kills</Table.HeaderCell>
                            <Table.HeaderCell>PGA</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                Hand Cannon
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsHandCannon.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsHandCannon.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Auto Rifle
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsAutoRifle.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsAutoRifle.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Scout Rifle
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsScoutRifle.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsScoutRifle.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Pulse Rifle
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsPulseRifle.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsPulseRifle.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Shotgun
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsShotgun.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsShotgun.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Fusion Rifle
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsFusionRifle.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsFusionRifle.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>
                                Submachine Gun
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSubmachinegun.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSubmachinegun.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Sidearm
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSideArm.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSideArm.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Sniper
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSniper.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSniper.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Rocket Launcher
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsRocketLauncher.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsRocketLauncher.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Sword
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSword.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSword.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Trace Rifle
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsTraceRifle.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsTraceRifle.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Grenade Launcher
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsGrenadeLauncher.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsGrenadeLauncher.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>
                                Grenade
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsGrenade.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsGrenade.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Melee
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsMelee.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsMelee.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Super
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSuper.basic.displayValue}
                            </Table.Cell>
                            <Table.Cell>
                                {pvp.weaponKillsSuper.pga.displayValue}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            )
        } else
            return <div></div>
    }
}

export default CareerStats;