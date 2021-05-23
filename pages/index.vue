<template>
  <main>
    <section class="pt-lg-60 pb-lg-93 pb-50 pt-50 text-dark-secondary">
      <div class="container">
        <div class="mb-30">
          <h1 class="mb-0">Contacts</h1>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-lg-0 mb-16">
            <div class="mb-30">
              <div class="h2 mb-0">
                <span class="color-green">GMS</span> Headquarters
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-20 text-p2">
                  Global Message Services Ukraine LLC<br />
                  Bundesstrasse 5 | 3rd Floor<br />
                  6300 Zug<br />
                  Switzerland
                </div>
                <a
                  href="tel:+41415446200"
                  class="d-block font-weight-light text-p4 phone-number"
                  >+41 41 544 62 00</a
                >
              </div>
              <div class="col-lg-6">
                <div>
                  Email<br />
                  <a
                    href="mailto:INFO@GMS-WORLDWIDE.COM"
                    class="font-weight-bold"
                    >INFO@GMS-WORLDWIDE.COM</a
                  ><br />

                  Send message<br />
                  <a
                    href="viber://chat?number=%2B380660902690"
                    class="font-weight-bold"
                    >VIBER US</a
                  ><br />

                  Send form<br />
                  <div
                    @click="scrollToForm"
                    class="font-weight-bold color-green cursor-pointer"
                  >
                    Contact us
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="pl-lg-33">
              <div class="mb-30">
                <div class="h2 mb-0">
                  Technical support <span class="color-green">24/7</span>
                </div>
              </div>
              <div class="mb-25 text-p2">
                GMS understands that it can be hard to follow all new
                technologies. We regularly provide for all our clients
                educational trainings to make your operator`s business earn more
                and better though our best practices.
              </div>
              <a
                href="tel:+41415446206"
                class="d-block font-weight-light text-p4"
                >+41 41 544 62 06</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="pt-lg-90 pb-lg-150 pb-50 pt-50 text-white position-relative"
    >
      <img
        class="position-absolute absolute-img"
        src="/mocks/bg-map-section.jpg"
        alt=""
      />
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-6">
            <div class="mb-32">
              <div class="h2 mb-0">Our Offices</div>
            </div>
            <div class="mb-45">
              <ul class="d-flex list-unstyled text-uppercase">
                <li
                  @click="setMarker('kiev')"
                  :class="{
                    'color-green': map.activeCity === 'kiev',
                  }"
                  class="tab-item pr-20"
                >
                  KYIV
                </li>
                <li
                  @click="setMarker('newYork')"
                  :class="{
                    'color-green': map.activeCity === 'newYork',
                  }"
                  class="tab-item pr-20"
                >
                  New york
                </li>
                <li
                  @click="setMarker('guangzhou')"
                  :class="{
                    'color-green': map.activeCity === 'guangzhou',
                  }"
                  class="tab-item pr-20"
                >
                  Guangzhou
                </li>
                <li
                  @click="setMarker('barcelona')"
                  :class="{
                    'color-green': map.activeCity === 'barcelona',
                  }"
                  class="tab-item pr-20"
                >
                  barcelona
                </li>
              </ul>
            </div>
            <div class="mb-27">
              <div class="h3 mb-0">Global Message Services Ukraine LLC</div>
            </div>
            <div class="address">
              Kuiv, Stepan Bandera, 33<br />
              02066<br />
              Ukraine
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="google-map-wrapper">
          <client-only>
            <google-map
              class="google-map"
              :options="map.options"
              :center="map.center"
              :zoom="7"
            >
              <google-marker
                v-for="(m, index) in map.markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              ></google-marker>
            </google-map>
          </client-only>
        </div>
      </div>
    </section>
    <section
      class="
        pt-lg-90
        pb-lg-100 pb-50
        pt-50
        bg-green
        text-white
        position-relative
      "
    >
      <img
        class="position-absolute absolute-img"
        src="/mocks/bg-contact-section.png"
        alt=""
      />
      <div class="container">
        <div class="mb-27">
          <div class="h2 mb-0">Contact Us</div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-lg-0 mb-16">
            <form @submit.prevent="submit" id="form" class="mt-4">
              <BaseInput
                ref="name"
                v-model="form.name"
                class="mb-20"
                label="Name"
                :hasError="
                  (!$v.form.name.required || !$v.form.name.maxLength) &&
                  form.submitStatus === 'ERROR'
                "
              />
              <BasePhoneInput
                ref="phone"
                v-model="form.phone"
                class="mb-20"
                label="Phone"
                :hasError="
                  (!$v.form.phone.required || !$v.form.phone.minLength) &&
                  form.submitStatus === 'ERROR'
                "
              />

              <BaseInput
                ref="email"
                v-model="form.email"
                class="mb-20"
                label="E-mail"
                type="email"
                :hasError="
                  (!$v.form.email.required || !$v.form.email.email) &&
                  form.submitStatus === 'ERROR'
                "
              />
              <BaseCheckbox
                class="mb-47"
                label="I agree the processing of personal data"
              />
              <BaseButton class="pl-95 pr-85 py-34 bg-black text-white"
                >Get in touch</BaseButton
              >
            </form>
          </div>
          <div class="col-lg-6">
            <div class="pl-lg-21">
              <div class="text-p3 font-weight-light">
                Please tell us more about your request and give us info about
                your company and country
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal name="success">Success submit</modal>
  </main>
</template>
<script>
import BaseInput from '@/components/base/BaseInput'
import BaseCheckbox from '@/components/base/BaseCheckbox'
import BaseButton from '@/components/base/BaseButton'
import googleMapStyle from '@/static/googleMapStyle.json'
import BasePhoneInput from '@/components/base/BasePhoneInput'

import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  components: { BasePhoneInput, BaseButton, BaseCheckbox, BaseInput },
  data() {
    return {
      map: {
        activeCity: 'kiev',
        mapLocations: {
          kiev: {
            lat: 50.401699,
            lng: 30.252512,
          },
          newYork: {
            lat: 40.6971494,
            lng: -74.2598655,
          },
          guangzhou: {
            lat: 23.1246076,
            lng: 112.6673744,
          },
          barcelona: {
            lat: 41.3947688,
            lng: 2.0787279,
          },
        },
        options: { styles: googleMapStyle },
        center: {
          lat: 50.401699,
          lng: 30.252512,
        },
        markers: [
          {
            position: {
              lat: 50.401699,
              lng: 30.252512,
            },
          },
        ],
      },
      form: {
        name: '',
        phone: '',
        email: '',
        submitStatus: null,
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      phone: {
        required,
        minLength: minLength(17),
      },
      name: {
        required,
        maxLength: maxLength(30),
      },
    },
  },

  methods: {
    scrollToForm() {
      const scrollElem = document.querySelector('#form')
      const scrollElemTop = parseInt(scrollElem.getBoundingClientRect().top)

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: scrollElemTop,
      })
    },
    setMarker(city = {}) {
      const location = this.map.mapLocations[city]
      this.map.activeCity = city
      this.map.center = location
      this.map.markers.pop()
      this.map.markers.push({
        position: location,
      })
    },
    onPhone(phone) {
      this.form.phone = phone
    },
    async submit() {
      try {
        if (this.$v.$invalid) {
          this.form.submitStatus = 'ERROR'
        } else {
          const phone = this.form.phone.replace(/\D/g, '')
          const res = await this.$axios.post('http://httpbin.org/post', {
            name: this.form.name,
            phone,
            email: this.form.email,
          })
          if (res.statusText === 'OK') {
            this.form.name = ''
            this.form.phone = ''
            this.form.email = ''
            this.form.submitStatus = null
            this.$refs.name.$refs.input.value = ''
            this.$refs.email.$refs.input.value = ''
            this.$refs.phone.$refs.input.value = ''
            this.$modal.show('success')
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.phone-number {
  letter-spacing: -0.2px;
}
.address {
  font-size: 11px;
  line-height: 20px;
  letter-spacing: -0.4px;
}
.tab-item {
  font-size: 11px;
  cursor: pointer;
  letter-spacing: 0.14em;
}
@media (max-width: 1279.98px) {
  .google-map {
    margin-top: 16px;
    height: 400px;
  }
}
@media (min-width: 1280px) {
  .google-map {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
  }
}
</style>
